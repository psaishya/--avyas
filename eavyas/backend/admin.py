from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.User_teacher)
admin.site.register(models.User_student)
admin.site.register(models.CourseCategory)
admin.site.register(models.Course)
