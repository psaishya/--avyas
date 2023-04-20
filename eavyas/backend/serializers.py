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
        fields=['id','category','teacher','title','description','thumbnail','course_chapters','related_videos']
        depth =1


class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Chapter
        fields=['id','course','title','description','video']

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Quiz
        fields=['id','teacher','title','detail','assign_status','add_time']
        
    def __init__(self, *args, **kwargs):
        super(QuizSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method=='GET':
            self.Meta.depth=2

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.QuizQuestions
        fields=['id','quiz','question','ans1','ans2','ans3','ans4','right_ans']
        
    def __init__(self, *args, **kwargs):
        super(QuestionSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method=='GET':
            self.Meta.depth=1
            
class courseQuizSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.courseQuiz
        fields=['id','teacher','course','quiz','add_time']
    
    def __init__(self, *args, **kwargs):
        super(courseQuizSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method=='GET':
            self.Meta.depth=2
        