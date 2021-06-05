import ingredient.views
import recipe.views

from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from workbench.views import craft_item

router = routers.DefaultRouter()
router.register(r'ingredients', ingredient.views.IngredientViewSet)
router.register(r'recipes', recipe.views.RecipeViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/workbench/', craft_item)
]
