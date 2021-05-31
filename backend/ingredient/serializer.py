from .models import Ingredient
from rest_framework import serializers


class IngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['representation', 'illustration_url']