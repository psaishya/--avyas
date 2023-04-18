"""eavyas URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.views.generic import TemplateView
from backend.views import GoogleLogin,google_auth
from backend import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('api-auth/',include('rest_framework.urls')),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),  
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('dj-rest-auth/google/', GoogleLogin.as_view(), name='google_login'),
    path('google-auth/', views.google_auth, name='google_auth'),
    path('teacher/',views.TeacherList.as_view()),
    path('teacher/<int:pk>/',views.TeacherDetail.as_view()),
    path('student/',views.StudentList.as_view()),
    path('student/<int:pk>/',views.StudentDetail.as_view()),
    path('loggedteacher/',views.Loggedteacher),
    path('loggedstudent/',views.Loggedstudent),

    # category
    path('category/',views.CategoryList.as_view()),

    #course
    path('course/',views.CourseList.as_view()),

    #Teacher courses
    path('teacher-courses/<int:teacher_id>/',views.TeacherCourseList.as_view()),
    
    #for quiz
    path('quiz/',views.QuizList.as_view()),
    path('teacher-quiz/<int:teacher_id>/',views.TeacherQuizList.as_view()),




]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
