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
    class Meta:
        verbose_name_plural="1. Teachers"

class CourseCategory(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()

    class Meta:
        verbose_name_plural = "2. Course Categories"

    def __str__(self):
        return self.title

#course model
class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    teacher = models.ForeignKey(User_teacher, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    description = models.TextField()
    thumbnail=models.ImageField(upload_to='course_imgs/', null='True')

    class Meta:
        verbose_name_plural = "3. Course"

#chapter model
class Chapter(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    description = models.TextField()
    video=models.FileField(upload_to='chapter_videos/', null='True')

    class Meta:
        verbose_name_plural = "4. Chapter"

class User_student(models.Model):
    studentId=models.AutoField(primary_key=True)
    firstName=models.CharField( max_length=50,default="")
    lastName=models.CharField(max_length=50,default="")
    gender=models.CharField(max_length=10,default="")
    phoneNo=models.CharField(max_length=10,default="")
    email=models.EmailField(max_length=50,default="")
    userName=models.CharField( max_length=50,default="",unique=TRUE)
    interested_categories= models.TextField(default="")

    class Meta:
        verbose_name_plural = "5. Student"
