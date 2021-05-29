# Generated by Django 3.0.5 on 2021-05-29 18:57

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ingredient',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('representation', models.CharField(max_length=1, unique=True)),
                ('illustration_url', models.TextField()),
            ],
        ),
    ]
