from rest_framework import serializers
from rest_framework.response import Response
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
        fields=['category','teacher','title','description','thumbnail']
        
class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Quiz
        fields=['id','teacher','title','detail','add_time']
        
    def __init__(self, *args, **kwargs):
        super(QuizSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method=='GET':
            self.Meta.depth=2
