from django.db import models
from pickle import TRUE

# Create your models here.

class User_teacher(models.Model):
    teacherId=models.AutoField(primary_key=True)
    firstName=models.CharField( max_length=50,default="")
    lastName=models.CharField(max_length=50,default="")
    gender=models.CharField(max_length=10,default="")
    phoneNo=models.CharField(max_length=10,default="")
    email=models.EmailField(max_length=50,default="")
    userName=models.CharField( max_length=50,default="",unique=TRUE)
    # class Meta:
    #     verbose_name_plural="1. Users"
        
class User_student(models.Model):
    studentId=models.AutoField(primary_key=True)
    firstName=models.CharField( max_length=50,default="")
    lastName=models.CharField(max_length=50,default="")
    gender=models.CharField(max_length=10,default="")
    phoneNo=models.CharField(max_length=10,default="")
    email=models.EmailField(max_length=50,default="")
    userName=models.CharField( max_length=50,default="",unique=TRUE)
