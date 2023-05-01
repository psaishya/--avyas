from django.shortcuts import render
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView
from rest_framework import generics
from .serializers import teacherSerializer,studentSerializer,categorySerializer,CourseSerializer,StudentCourseEnrollSerializer,CourseRatingSerializer,QuizSerializer,ChapterSerializer,QuestionSerializer,courseQuizSerializer,attemptQuizSerializer,TeacherDashSerializer 
from . import models
import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions




class GoogleLogin(SocialLoginView): # if you want to use Authorization Code Grant, use this
    adapter_class = GoogleOAuth2Adapter
    callback_url ='http://localhost:8000/accounts/google/login/callback/'
    client_class = OAuth2Client

# class GoogleLogin(SocialLoginView): # if you want to use Implicit Grant, use this
#     adapter_class = GoogleOAuth2Adapter


def google_auth(request):
    # get the query parameters from the request
    redirect_uri = request.GET.get('redirect_uri')
    prompt = request.GET.get('prompt')
    response_type = request.GET.get('response_type')
    client_id = request.GET.get('client_id')
    scope = request.GET.get('scope')

    # create the URL to Google's server
    google_auth_url = f'https://accounts.google.com/o/oauth2/v2/auth?redirect_uri={redirect_uri}&prompt={prompt}&response_type={response_type}&client_id={client_id}&scope={scope}'
    # google_auth_url='https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:8000/accounts/google/login/callback/&prompt=consent&response_type=code&client_id=1050321826751-0eh5heri6umccqffjceagt85e61hi98g.apps.googleusercontent.com&scope=openid%20email%20profile'   # make the request to Google's server using the requests library
    response = requests.get(google_auth_url)

    # return the response as a JSON object
    return JsonResponse(response.json())

class TeacherList(generics.ListCreateAPIView):
    queryset=models.User_teacher.objects.all() 
    serializer_class=teacherSerializer
    # permission_classes=[permissions.IsAuthenticated]

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.User_teacher.objects.all()
    serializer_class = teacherSerializer
    # permission_classes=[permissions.IsAuthenticated]

class TeacherDash(generics.RetrieveAPIView):
    queryset=models.User_teacher.objects.all()
    serializer_class=TeacherDashSerializer

class StudentList(generics.ListCreateAPIView):
    queryset=models.User_student.objects.all() 
    serializer_class=studentSerializer

class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.User_student.objects.all()
    serializer_class = studentSerializer
    # permission_classes=[permissions.IsAuthenticated]

@csrf_exempt     
def Loggedteacher(request):
    queryset=models.User_teacher.objects.all() 
    userName=request.POST["userName"]
    userdata=queryset.filter(userName=userName)
    if userdata:
        # return JsonResponse(userdata,safe=false)
        return JsonResponse({'id':userdata[0].teacherId})

@csrf_exempt     
def Loggedstudent(request):
    queryset=models.User_student.objects.all() 
    userName=request.POST["userName"]
    userdata=queryset.filter(userName=userName)
    if userdata:
        # return JsonResponse(userdata,safe=false)
        return JsonResponse({'id':userdata[0].studentId})
    
# course categories
class CategoryList(generics.ListCreateAPIView):
    queryset = models.CourseCategory.objects.all()
    serializer_class = categorySerializer

#course  
class CourseList(generics.ListCreateAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer

    def get_queryset(self):
        qs =super().get_queryset()
        if 'result' in self.request.GET:
            limit=int(self.request.GET['result'])
            qs=models.Course.objects.all().order_by('-id')[:limit]
        
        if 'searchstring' in self.kwargs:
            search=self.kwargs['searchstring']
            qs = models.Course.objects.filter(title__icontains=search)

        return qs
        

#course detail
class CourseDetailView(generics.RetrieveAPIView):
    queryset = models.Course.objects.all()
    serializer_class=CourseSerializer

#Specific Teacher Course
class TeacherCourseList(generics.ListAPIView):
    serializer_class = CourseSerializer

    def get_queryset(self):
        teacher_id = self.kwargs['teacher_id']
        teacher=models.User_teacher.objects.get(pk=teacher_id)
        return models.Course.objects.filter(teacher=teacher)

#chapter
class ChapterList(generics.ListCreateAPIView):
    queryset = models.Chapter.objects.all()
    serializer_class=ChapterSerializer
    
#course-chapter
class CourseChapterList(generics.ListAPIView):
    serializer_class=ChapterSerializer

    def get_queryset(self):
        course_id = self.kwargs['course_id']
        course=models.Course.objects.get(pk=course_id)
        return models.Chapter.objects.filter(course=course)
    

# for student enrolling in class
class StudentEnrollCourseList(generics.ListCreateAPIView):
    queryset=models.StudentCourseEnrollment.objects.all() 
    serializer_class=StudentCourseEnrollSerializer

def fetch_enroll_status(request,student_id,course_id):
    student=models.User_student.objects.filter(studentId=student_id).first()
    course=models.Course.objects.filter(id=course_id).first()
    enrollStatus=models.StudentCourseEnrollment.objects.filter(course=course,student=student).count()
    if enrollStatus:
        return JsonResponse ({'bool': True }) 
        # 'enrollStatus':enrollStatus.id
    else:
        return JsonResponse({'bool':False})
    

class EnrolledStudentList(generics.ListAPIView):
    queryset=models.StudentCourseEnrollment.objects.all() 
    serializer_class=StudentCourseEnrollSerializer
    
    def get_queryset(self):
        if 'course_id' in self.kwargs:
            course_id = self.kwargs['course_id']
            course=models.Course.objects.get(pk=course_id)
            return models.StudentCourseEnrollment.objects.filter(course=course)
        elif 'teacher_id' in self.kwargs:
            teacher_id = self.kwargs['teacher_id']
            teacher=models.User_teacher.objects.get(pk=teacher_id)
            return models.StudentCourseEnrollment.objects.filter(course_teacher=teacher).distinct()
        elif 'student_id' in self.kwargs:
            student_id = self.kwargs['student_id']
            student=models.User_student.objects.get(pk=student_id)
            return models.StudentCourseEnrollment.objects.filter(student=student).distinct()
    
  
# for courseRating
class CourseRatingList(generics.ListCreateAPIView):
    queryset=models.CourseRating.objects.all() 
    serializer_class=CourseRatingSerializer

    def get_queryset(self):
        qs =super().get_queryset()
        if 'popular' in self.request.GET:
            limit=int(self.request.GET['popular'])
            qs=models.CourseRating.objects.all().order_by('-rating')[:limit]
        return qs

    # def get_queryset(self):
    #     if 'popular' in self.request.GET:
    #         sql="SELECT *,AVG (cr.rating) as avg_rating FROM main_courserating as cr INNER JOIN main_course as c ON cr.course_id=c.id GROUP BY c.ID ORDER BY  avg_rating desc LIMIT 4"
    #         return models.CourseRating.objects.raw(sql)
    #     if 'all' in self.request.GET:
    #         sql="SELECT *,AVG (cr.rating) as avg_rating FROM main_courserating as cr INNER JOIN main_course as c ON cr.course_id=c.id GROUP BY c.ID ORDER BY  avg_rating desc"
    #         return models.CourseRating.objects.raw(sql)
    
    
def fetch_rating_status(request,student_id,course_id):
    student=models.User_student.objects.filter(studentId=student_id).first()
    course=models.Course.objects.filter(id=course_id).first()
    ratingStatus=models.CourseRating.objects.filter(course=course,student=student).count()
    if ratingStatus:
        return JsonResponse ({'bool': True }) 
    else:
        return JsonResponse({'bool':False})


        

#for quiz
#
class QuizList(generics.ListCreateAPIView):
    queryset=models.Quiz.objects.all()
    serializer_class=QuizSerializer

class TeacherQuizList(generics.ListAPIView):
    serializer_class = QuizSerializer

    def get_queryset(self):
        teacher_id = self.kwargs['teacher_id']
        teacher=models.User_teacher.objects.get(pk=teacher_id)
        return models.Quiz.objects.filter(teacher=teacher)

class TeacherQuizDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Quiz.objects.all()
    serializer_class=QuizSerializer
    
class QuizDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Quiz.objects.all()
    serializer_class=QuizSerializer
    
class QuizQuestionList(generics.ListCreateAPIView):
    serializer_class=QuestionSerializer
    
    def get_queryset(self):            
        quiz_id = self.kwargs['quiz_id']
        quiz=models.Quiz.objects.get(pk=quiz_id)
        if 'limit' in self.kwargs:
            return models.QuizQuestions.objects.filter(quiz=quiz).order_by('id')[:1]
        elif 'question_id' in self.kwargs:
            current_question=self.kwargs['question_id']
            return models.QuizQuestions.objects.filter(quiz=quiz,id__gt=current_question).order_by('id')[:1]
        else:
            return models.QuizQuestions.objects.filter(quiz=quiz)

class QuestionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Quiz.objects.all()
    serializer_class=QuestionSerializer

class courseQuizList(generics.ListCreateAPIView):
    queryset=models.courseQuiz.objects.all()
    serializer_class=courseQuizSerializer
    def get_queryset(self):
        if 'course_id' in self.kwargs:
            course_id = self.kwargs['course_id']
            course=models.Course.objects.get(pk=course_id)
            return models.courseQuiz.objects.filter(course=course)


def FetchQuizAssignStatus(request, quiz_id,course_id):
    quiz=models.Quiz.objects.filter(id=quiz_id).first()
    course=models.Course.objects.filter(id=course_id).first()
    assignStatus=models.courseQuiz.objects.filter(course=course,quiz=quiz).count()
    if assignStatus :
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})

class attemptQuizList(generics.ListCreateAPIView):
    queryset=models.attemptQuiz.objects.all()
    serializer_class=attemptQuizSerializer
    def get_queryset(self):
        if 'quiz_id' in self.kwargs:
            quiz_id = self.kwargs['quiz_id']
            quiz=models.Quiz.objects.get(pk=quiz_id)
            return models.attemptQuiz.objects.filter(quiz=quiz).values('student')
        # .order_by('quiz_id')[:1]
  
def FetchQuizAttemptStatus(request, quiz_id,student_id):
    quiz=models.Quiz.objects.filter(id=quiz_id).first()
    student=models.User_student.objects.filter(studentId=student_id).first()
    attemptStatus=models.attemptQuiz.objects.filter(student=student,question__quiz=quiz).count()
    if attemptStatus :
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})  

# # view
# def update_view(request,course_id):
#     queryset=models.Course.objects.filter(pk=course_id).first()
#     queryset.course_views += 1
#     queryset.save()
#     return JsonResponse({'views':queryset.course_views})