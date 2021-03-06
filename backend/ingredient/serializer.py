from .models import Ingredient
from rest_framework import serializers


class IngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['id', 'name', 'representation', 'illustration_url']