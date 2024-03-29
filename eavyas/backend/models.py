from django.db import models
from pickle import TRUE 
from django.core import serializers

# Create your models here.

class User_teacher(models.Model):
    teacherId=models.AutoField(primary_key=True)
    firstName=models.CharField( max_length=50,default="")
    lastName=models.CharField(max_length=50,default="")
    bio=models.TextField(default="null")
    gender=models.CharField(max_length=10,default="")
    phoneNo=models.CharField(max_length=10,default="")
    email=models.EmailField(max_length=50,default="")
    userName=models.CharField( max_length=50,default="",unique=TRUE)
    profile=models.ImageField(upload_to='teacher_imgs/', null='True')
    security=models.CharField(max_length=50,default="")

    class Meta:
        verbose_name_plural="1. Teachers"
    #no of courses
    def total_teacher_courses(self):
        total_courses=Course.objects.filter(teacher=self).count()
        return total_courses
    
    #no of chapters
    def total_teacher_chapters(self):
        total_chapters=Chapter.objects.filter(course__teacher=self).count()
        return total_chapters
    
    #total teacher students
    def total_teacher_students(self):
        total_students=StudentCourseEnrollment.objects.filter(course__teacher=self).count()
        return total_students
    


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
    teacher = models.ForeignKey(User_teacher, on_delete=models.CASCADE,related_name='teacher_courses')
    title = models.CharField(max_length=150)
    description = models.TextField()
    thumbnail=models.ImageField(upload_to='course_imgs/', null='True')

    class Meta:
        verbose_name_plural = "3. Course"
    
    def _str_(self):
        return self.title
    
    def total_enrolled_students(self):
        total_enrolled_students = StudentCourseEnrollment.objects.filter(course=self).count()
        return total_enrolled_students
    
    def course_rating(self):
        course_rating = CourseRating.objects.filter(course=self).aggregate(avg_rating = models.Avg('rating'))
        return course_rating['avg_rating']
    
    def related_videos(self):
        related_videos =Course.objects.filter(category=self.category)
        return serializers.serialize('json',related_videos)

#chapter model
class Chapter(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='course_chapters')
    title = models.CharField(max_length=150)
    description = models.TextField()
    video=models.FileField(upload_to='chapter_videos/', null="False")

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
    security=models.CharField(max_length=50,default="")
      # total favorite courses
    def favourite_courses(self):
        favourite_courses= StudentFavouriteCourse.objects.filter(student=self).count()
        return favourite_courses

    class Meta:
        verbose_name_plural = "5. Student"

    def _str_(self):
        return self.full_name

# Student Course Enrollment
class StudentCourseEnrollment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE,related_name='enrolled_courses')
    student = models.ForeignKey(User_student, on_delete=models.CASCADE,related_name='enrolled_student')
    enrolled_time=models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "6. Enrolled Courses"

    def _str_(self): 
        return f"{self.course}-{self.student}"
    
# Student Favourite course
class StudentFavouriteCourse(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    student = models.ForeignKey(User_student, on_delete=models.CASCADE)
    status=models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "6. Favorite Courses"

    def _str_(self): 
        return f"{self.course}-{self.student}"

#Course Rating
class CourseRating(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    student = models.ForeignKey(User_student, on_delete=models.CASCADE)
    rating = models.PositiveBigIntegerField(default=0)
    reviews = models.TextField(null=True)
    review_time=models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "7. Course Rating"

    def _str_(self): 
        return f"{self.course}-{self.student}-{self.rating}"



class Quiz(models.Model):
    teacher=models.ForeignKey(User_teacher,on_delete=models.CASCADE,null=True)
    title=models.CharField(max_length=200)
    detail=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)
    
    # def assign_status(self):
    #     return courseQuiz.objects.filter(quiz=self).count()
    
    class Meta:
        verbose_name_plural ="11. Quiz"
    
class QuizQuestions(models.Model):
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE,null=True)
    question=models.CharField(max_length=200)
    ans1=models.CharField(max_length=200)
    ans2=models.CharField(max_length=200)
    ans3=models.CharField(max_length=200)
    ans4=models.CharField(max_length=200)
    right_ans=models.CharField(max_length=200)

    add_time=models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural ="12. Quiz Questions"
        
#for quiz in course
class courseQuiz(models.Model):
    teacher=models.ForeignKey(User_teacher,on_delete=models.CASCADE,null=True)
    course=models.ForeignKey(Course,on_delete=models.CASCADE,null=True)
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE,null=True)
    add_time=models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural ="13. Course Quiz"

class attemptQuiz(models.Model):
    student=models.ForeignKey(User_student,on_delete=models.CASCADE,null=True)
    question=models.ForeignKey(QuizQuestions,on_delete=models.CASCADE,null=True)
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE,null=True)
    right_ans=models.CharField(max_length=200,null=True)
    add_time=models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural ="14. Attempted Question"


