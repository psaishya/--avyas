from django.shortcuts import render
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView
from rest_framework import generics
from .serializers import teacherSerializer,studentSerializer
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
    permission_classes=[permissions.IsAuthenticated]

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.User_teacher.objects.all()
    serializer_class = teacherSerializer
    permission_classes=[permissions.IsAuthenticated]

class StudentList(generics.ListCreateAPIView):
    queryset=models.User_student.objects.all() 
    serializer_class=studentSerializer

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
