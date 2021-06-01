from .models import Recipe
from .serializer import RecipeSerializer
from rest_framework import viewsets

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
