import json

from recipe.models import Recipe
from .helper import is_valid_submatrix

class WorkbenchService:
    def craft_item(self, arrangement):
        crafted_items = []

        recipes = Recipe.objects.all()
        for recipe in recipes:
            recipe_matrix = json.loads(recipe.matrix)
            print(recipe_matrix)
            print(is_valid_submatrix(arrangement, recipe_matrix))
        
        return crafted_items