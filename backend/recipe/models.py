import json
import uuid
from django.db import models

class Recipe(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=20, unique=True)
    representation = models.TextField(unique=True)
    illustration_url = models.TextField()
    matrix = models.TextField(null=True, blank=True)

    def save(self, *args, **kwargs):
        self.matrix = json.dumps([list(row) for row in self.representation.split('\r\n')])
        return super(Recipe, self).save(*args, **kwargs)