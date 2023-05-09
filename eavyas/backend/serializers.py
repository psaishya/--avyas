from rest_framework import serializers
from rest_framework.response import Response
from . import models

class teacherSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.User_teacher


        fields=['teacherId','firstName','lastName','bio','gender','phoneNo','email','userName','teacher_courses','profile']
        depth=1
    def __init__(self, *args, **kwargs):
        super(teacherSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method=='GET':
            self.Meta.depth=1
        

class TeacherDashSerializer(serializers.ModelSerializer):
    class Meta:
        model =models.User_teacher
        fields=['total_teacher_courses','total_teacher_students','total_teacher_chapters']
        
class studentSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.User_student
        fields=['studentId','firstName','lastName','gender','phoneNo','email','userName']

class StudentDashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.User_student
        fields=['enrolled_courses','favourite_courses']

class categorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CourseCategory
        fields=['id','title','description']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Course
        fields=['id','category','teacher','title','description','thumbnail','course_chapters','related_videos','total_enrolled_students','course_rating']
    
    def __init__(self, *args, **kwargs):
        super(CourseSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method=='GET':
            self.Meta.depth=1


class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Chapter
        fields=['id','course','title','description','video']
    def __init__(self, *args, **kwargs):
        super(ChapterSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method=='GET':
            self.Meta.depth=1

class StudentCourseEnrollSerializer(serializers.ModelSerializer):
    class Meta:
        model= models.StudentCourseEnrollment
        fields=['id','course','student','enrolled_time']
        depth =1
    def __init__(self, *args, **kwargs):
        super(StudentCourseEnrollSerializer,self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 2

class StudentFavouriteCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model= models.StudentFavouriteCourse
        fields=['id','course','student','status']
        
    def __init__(self, *args, **kwargs):
        super(StudentFavouriteCourseSerializer,self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 1

class CourseRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model= models.CourseRating
        fields=['id','course','student','rating','reviews','review_time']

    def __init__(self, *args, **kwargs):
        super(CourseRatingSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method=='GET':
            self.Meta.depth=1
        


class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Quiz
        # fields=['id','teacher','title','detail','assign_status','add_time']
        fields=['id','teacher','title','detail','add_time']

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
        
class attemptQuizSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.attemptQuiz
        fields=['id','student','question','quiz','right_ans','add_time']
        # fields=['id','student','question','add_time']

    def __init__(self, *args, **kwargs):
        super(attemptQuizSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method=='GET':
            self.Meta.depth=2
         