from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Course(models.Model):
    courseName = models.CharField(max_length=100)
    courseCode = models.CharField(max_length=100, unique=True)
    semester = models.CharField(max_length=100)
    credits = models.IntegerField()
    requisites = ArrayField(models.CharField(max_length=100, blank=True))
    color = models.CharField(max_length=100)
