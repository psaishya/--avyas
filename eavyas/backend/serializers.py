from rest_framework import serializers
from . import models

class teacherSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.User_teacher
        fields=['teacherId','firstName','lastName','gender','phoneNo','email','userName']
        
class studentSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.User_student
        fields=['studentId','firstName','lastName','gender','phoneNo','email','userName']

class categorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CourseCategory
        fields=['id','title','description']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Course
        fields=['id','category','teacher','title','description','thumbnail','course_chapters','related_videos']
        depth =1


class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Chapter
        fields=['id','course','title','description','video']
