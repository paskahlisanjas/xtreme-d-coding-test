import json

from rest_framework.test import RequestsClient
from django.test import TestCase
from .models import Ingredient

class IngredientTest(TestCase):
    def setUp(self):
        Ingredient.objects.create(
            name='Wood',
            representation='W',
            illustration_url='https://www.wood-image.com/file.png')
        Ingredient.objects.create(
            name='Glass',
            representation='G',
            illustration_url='https://www.glass-image.com/file.png')


    def test_attributes_matches(self):
        """test object query, should return all records & matches all the attributes"""
        wood = Ingredient.objects.get(name='Wood')
        glass = Ingredient.objects.get(name='Glass')
        self.assertEqual(wood.name, 'Wood')
        self.assertEqual(wood.representation, 'W')
        self.assertEqual(wood.illustration_url, 'https://www.wood-image.com/file.png')
        self.assertEqual(glass.name, 'Glass')
        self.assertEqual(glass.representation, 'G')
        self.assertEqual(glass.illustration_url, 'https://www.glass-image.com/file.png')


    def test_api_list_ingredients_response_length(self):
        """test GET /api/ingredients/, should return all records"""
        client = RequestsClient()
        response = client.get('http://testserver/api/ingredients/')
        self.assertEqual(response.status_code, 200)

        decoded_content = bytes.decode(response.content)
        data = json.loads(decoded_content)
        self.assertEqual(len(data), 2)
    