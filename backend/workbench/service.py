import json

from recipe.models import Recipe
from recipe.serializer import RecipeSerializer
from .helper import count_submatrix

class WorkbenchService:
    def craft_item(self, arrangement):
        overall_count = 0
        crafted_items = []

        recipes = Recipe.objects.all()
        for recipe in recipes:
            recipe_matrix = json.loads(recipe.matrix)

            item = {}
            item['recipe'] = RecipeSerializer(recipe).data
            item['matches'] = count_submatrix(arrangement, recipe_matrix)
            crafted_items.append(item)

            overall_count += item['matches']

        return crafted_items, overall_count