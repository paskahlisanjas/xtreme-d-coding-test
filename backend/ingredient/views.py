from .models import Ingredient
from rest_framework import viewsets
from rest_framework import permissions
from .serializer import IngredientSerializer


class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer