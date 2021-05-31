from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from ingredient import views

router = routers.DefaultRouter()
router.register(r'ingredients', views.IngredientViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
