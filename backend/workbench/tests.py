import json

from rest_framework.test import RequestsClient
from django.test import TestCase
from recipe.models import Recipe
from .helper import generate_message, parse_arrangement, count_submatrix
from .service import WorkbenchService


RAW_ARRANGEMENT = {
    '1|1': 'I',
    '2|2': 'I',
    '1|3': 'I'
}

STANDARD_ARRANGEMENT = [
    ['_', '_', '_', '_'],
    ['_', 'I', '_', 'I'],
    ['_', '_', 'I', '_'],
    ['_', '_', '_', '_']
]
class HelperTest(TestCase):
    recipe = [
        ['I', '_', 'I'],
        ['_', 'I', '_']
    ]

    def test_generate_message_with_zero_matches(self):
        """test helper.generage_message zero matches, return failure"""
        msg, status = generate_message(0)
        self.assertEqual(msg, "Failed to craft item. Workbench arrangement doesn't match any recipe.")
        self.assertEqual(status, 'FAILED')

    def test_generate_message_with_multiple_matches(self):
        """test helper.generage_message multiple matches, return failure"""
        msg, status = generate_message(2)
        self.assertEqual(msg, "Failed to craft item. Workbench arrangement matches multiple recipes.")
        self.assertEqual(status, 'FAILED')

    def test_generate_message_with_single_matches(self):
        """test helper.generage_message single matches, return success"""
        msg, status = generate_message(1)
        self.assertEqual(msg, "An item is successfully crafted!")
        self.assertEqual(status, 'SUCCESS')

    def test_parse_arrangement(self):
        """test helper.parse_arrangement 4x4, return desired matrix"""
        self.assertEquals(
            parse_arrangement(4, 4, RAW_ARRANGEMENT),
            STANDARD_ARRANGEMENT
        )

    def test_parse_arrangement(self):
        """test helper.parse_arrangement 4x4 but empty, return desired matrix"""
        self.assertEquals(
            parse_arrangement(4, 4, {}),
            [
                ['_', '_', '_', '_'],
                ['_', '_', '_', '_'],
                ['_', '_', '_', '_'],
                ['_', '_', '_', '_']
            ]
        )
        
    def test_count_submatrix_single_match(self):
        """test helper.count_submatrix with a match, return desired number"""
        self.assertEquals(
            count_submatrix(STANDARD_ARRANGEMENT,self.recipe),
            1
        )
    
    def test_count_submatrix_multiple_match(self):
        """test helper.count_submatrix with multiple matches, return desired number"""
        self.assertEquals(
            count_submatrix(
                [
                    ['_', '_', '_', '_'],
                    ['_', 'I', '_', 'I'],
                    ['_', '_', 'I', '_'],
                    ['_', '_', '_', '_'],
                    ['_', 'I', '_', 'I'],
                    ['_', '_', 'I', '_'],
                    ['_', '_', '_', '_']
                ],
                self.recipe
            ),
            2
        )

    def test_count_submatrix_no_match(self):
        """test helper.count_submatrix with no match, return desired number"""
        self.assertEquals(
            count_submatrix(
                [
                    ['_', '_', '_', '_'],
                    ['_', 'I', '_', 'I'],
                    ['_', '_', 'I', '_'],
                    ['_', '_', 'A', '_'],
                    ['_', 'I', '_', 'I'],
                    ['_', '_', 'I', '_'],
                    ['_', '_', '_', '_']
                ],
                self.recipe
            ),
            0
        )


class ServiceTest(TestCase):
    def setUp(self):
        Recipe.objects.create(
            name='Bucket',
            representation='I_I\r\n_I_',
            illustration_url='https://www.bucket-image.com/file.png')

    def test_craft_item(self):
        service = WorkbenchService()
        crafted_items, count = service.craft_item(STANDARD_ARRANGEMENT)
        self.assertEquals(count, 1)
        self.assertEquals(len(crafted_items), 1)
        self.assertEquals(crafted_items[0]['matches'], 1)
        self.assertEquals(crafted_items[0]['recipe']['name'], 'Bucket')


class APITest(TestCase):
    def setUp(self):
        Recipe.objects.create(
            name='Bucket',
            representation='I_I\r\n_I_',
            illustration_url='https://www.bucket-image.com/file.png')

    def test_api_list_ingredients_response_length(self):
        """test POST /api/workbench/ with single match with recipe, should return success"""
        client = RequestsClient()
        response = client.post('http://testserver/api/workbench/', json={
            'rowSize': 4,
            'columnSize': 4,
            'arrangement': RAW_ARRANGEMENT
        })
        self.assertEqual(response.status_code, 200)

        decoded_content = bytes.decode(response.content)
        data = json.loads(decoded_content)
        self.assertEqual(data['status'], 'SUCCESS')