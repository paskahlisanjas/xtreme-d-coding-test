from django.contrib.auth import get_user_model

User = get_user_model()
if User.objects.filter(username='admin').exists():
  print('Super user has already existed.')
else:
  User.objects.create_superuser('admin', 'paskahlisa@gmail.com', 'admin')
  print('Super user is successfully created!')