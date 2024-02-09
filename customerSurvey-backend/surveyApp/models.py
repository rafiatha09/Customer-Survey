from django.db import models


class Customer(models.Model):
    name = models.CharField(max_length=100)
    instagram_username = models.CharField(max_length=100)
    favorite_outfit_color = models.CharField(max_length=50)

    def __str__(self):
        return self.name
