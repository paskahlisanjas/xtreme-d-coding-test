from .models import Ingredient
from rest_framework import viewsets
from .serializer import IngredientSerializer


class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer