from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.User_teacher)
admin.site.register(models.User_student)
admin.site.register(models.CourseCategory)
admin.site.register(models.Course)
admin.site.register(models.Quiz)
admin.site.register(models.QuizQuestions)
admin.site.register(models.attemptQuiz)
admin.site.register(models.courseQuiz)
admin.site.register(models.Chapter)
admin.site.register(models.StudentCourseEnrollment)
admin.site.register(models.CourseRating)
