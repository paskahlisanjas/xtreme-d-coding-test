#!/bin/bash

# db migration
python manage.py makemigrations
python manage.py migrate

# superuser creation
python manage.py shell < super_user_creation.py

# run server
python manage.py runserver 0.0.0.0:8000