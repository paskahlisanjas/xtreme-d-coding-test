import uuid
from django.db import models

class Ingredient(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    representation = models.CharField(max_length=1, unique=True)
    illustration_url = models.TextField()