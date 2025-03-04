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
from backend.views import GoogleLogin
from backend import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),    
    path('accounts/', include('allauth.urls')),
    path('api-auth/',include('rest_framework.urls')),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),  
    path('dj-rest-auth/google/', GoogleLogin.as_view(), name='google_login'),
    path('google-auth/', views.google_auth, name='google_auth'),
    path('teacher/dashboard/<int:pk>',views.TeacherDash.as_view()),
    path('teacher/',views.TeacherList.as_view()),
    path('teacher/<int:pk>/',views.TeacherDetail.as_view()),
    path('student/',views.StudentList.as_view()),
    path('student/<int:pk>/',views.StudentDetail.as_view()),
    path('loggedteacher/',views.Loggedteacher),
    path('loggedstudent/',views.Loggedstudent),
    path('studentsecurity/',views.studentsecurity),
    path('teachersecurity/',views.teachersecurity),


    # category
    path('category/',views.CategoryList.as_view()),

    #course
    path('course/',views.CourseList.as_view()),
    path('search-courses/<str:searchstring>',views.CourseList.as_view()),
    # path('update-view/<int:course_id>',views.update_view),
    # path('popular-courses/',views.CourseRatingList.as_view()),


    #course detail
    path('course/<int:pk>/',views.CourseDetailView.as_view()),
    
    #chapter
    path('chapter/',views.ChapterList.as_view()),

    #specific course chapter
     path('course-chapters/<int:course_id>',views.CourseChapterList.as_view()),

    #Teacher courses
    path('teacher-courses/<int:teacher_id>/',views.TeacherCourseList.as_view()),
    #student enroll
    path('student-enroll-course/',views.StudentEnrollCourseList.as_view()),
    path('fetch-enroll-status/<int:student_id>/<int:course_id>/',views.fetch_enroll_status),
    path('fetch-enrolled-students/<int:course_id>/',views.EnrolledStudentList.as_view()),
    path('fetch-enrolled-courses/<int:student_id>/',views.EnrolledStudentList.as_view()),
    path('fetch-all-enrolled-students/<int:teacher_id>/',views.EnrolledStudentList.as_view()),


    # favourite course
    path('student-add-favourite-course/',views.StudentFavouriteCourseList.as_view()),
    path('fetch-favourite-status/<int:student_id>/<int:course_id>/',views.fetch_favourite_status),
    path('student-remove-favourite-course/<int:course_id>/<int:student_id>/',views.remove_favourite_course),
    path('fetch-favourite-courses/<int:student_id>/',views.StudentFavouriteCourseList.as_view()),

    #courseRating
    path('course-rating/',views.CourseRatingList.as_view()), 
    path('fetch-rating-status/<int:student_id>/<int:course_id>/',views.fetch_rating_status), 
    #for quiz
    path('quiz/',views.QuizList.as_view()),
    path('teacher-quiz/<int:teacher_id>/',views.TeacherQuizList.as_view()),
    path('quiz-questions/<int:quiz_id>/',views.QuizQuestionList.as_view()),
    path('quiz-questions/<int:quiz_id>/<int:limit>',views.QuizQuestionList.as_view()),

    path('teacher-quiz-detail/<int:pk>/',views.TeacherQuizDetail.as_view()),
    path('quiz/<int:pk>/',views.QuizDetailView.as_view()),
    path('question/<int:pk>/',views.QuestionDetailView.as_view()),
    path('fetch-quiz-assign-status/<int:quiz_id>/<int:course_id>/',views.FetchQuizAssignStatus),
    path('quiz-assign-course/',views.courseQuizList.as_view()),
    path('fetch-assigned-quiz/<int:course_id>/',views.courseQuizList.as_view()),
    path('attempt-quiz/',views.attemptQuizList.as_view()),
    path('quiz-questions/<int:quiz_id>/next-question/<int:question_id>/',views.QuizQuestionList.as_view()),
    path('fetch-quiz-attempt-status/<int:quiz_id>/<int:student_id>/',views.FetchQuizAttemptStatus),
    path('attempted-quiz/<int:quiz_id>/',views.attemptQuizList.as_view()),
    path('each-attempted-quiz/<int:quiz_id>/<int:student_id>/',views.EachstudentattemptQuizList.as_view()),
    path('fetch-quiz-result/<int:quiz_id>/<int:student_id>/',views.fetch_quiz_result),







]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
