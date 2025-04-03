from django.db import models

# Create your models here.
class PlayerScore(models.Model):
    name = models.CharField(max_length=100)
    score= models.IntegerField()
    

    