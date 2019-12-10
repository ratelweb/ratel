from django.db import models

# Create your models here.

class User(models.Model):
    email = models.CharField(max_length=50, default="aaa@gmail.com")

class Bookmark(models.Model):
    iden = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    bookmark = models.CharField(default="1234567891011", max_length=13)