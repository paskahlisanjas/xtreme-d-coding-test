import json

from rest_framework.test import RequestsClient
from django.test import TestCase
from .models import Recipe

class IngredientTest(TestCase):
    def setUp(self):
        Recipe.objects.create(
            name='Bucket',
            representation='I_I\r\n_I_',
            illustration_url='https://www.bucket-image.com/file.png')


    def test_attributes_matches(self):
        """test object query, should return all records & matches all the attributes"""
        bucket = Recipe.objects.get(name='Bucket')
        self.assertEqual(bucket.name, 'Bucket')
        self.assertEqual(bucket.representation, 'I_I\r\n_I_')
        self.assertEqual(bucket.illustration_url, 'https://www.bucket-image.com/file.png')
        self.assertEqual(bucket.matrix, '[["I", "_", "I"], ["_", "I", "_"]]')


    def test_api_list_ingredients_response_length(self):
        """test GET /api/recipes/, should return all records"""
        client = RequestsClient()
        response = client.get('http://testserver/api/recipes/')
        self.assertEqual(response.status_code, 200)

        decoded_content = bytes.decode(response.content)
        data = json.loads(decoded_content)
        self.assertEqual(len(data), 1)
