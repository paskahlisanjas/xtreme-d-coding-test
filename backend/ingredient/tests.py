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
        wood = Ingredient.objects.get(name='Wood')
        glass = Ingredient.objects.get(name='Glass')
        self.assertEqual(wood.name, 'Wood')
        self.assertEqual(wood.representation, 'W')
        self.assertEqual(wood.illustration_url, 'https://www.wood-image.com/file.png')
        self.assertEqual(glass.name, 'Glass')
        self.assertEqual(glass.representation, 'G')
        self.assertEqual(glass.illustration_url, 'https://www.glass-image.com/file.png')