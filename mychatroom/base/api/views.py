from email import message
import profile
from django import dispatch
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from django.contrib.auth import authenticate, login, logout

from .serializers import MessageSerializer, RoomSerializer, TopicSerializer, UserSerializer, ProfileSerializer

from base.models import Room, Topic, Message, User, UserDetail

@method_decorator(csrf_protect, name='dispatch')
class CheckAuthenticatedView(APIView):
    def get(self, request, format=None):
        isAuthenticated=User.is_authenticated
        if isAuthenticated:
            return Response({'isAuthenticated':'success'})
        else:
            return Response({'isAuthenticated':'failed'})

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET /api',
        'GET /api/rooms',
        'GET /api/rooms/:id',
        'GET /api/topics'
    ]
    return Response(routes)

class UserProfile(APIView):
    def get(self, request):
        user=User.objects.get(id=self.request.user.id)
        profile=UserDetail.objects.get(user=user)
        userSerializer=UserSerializer(user, many=False)
        profileSerializer=ProfileSerializer(profile, many=False)
        return Response({'user':userSerializer.data, 'profile':profileSerializer.data})
    
    def put(self, request):
        data=self.request.data
        user=User.objects.get(id=self.request.user.id)
        profile=UserDetail.objects.get(user=user)
        newEmail, newNickname, newDescription=data['email'], data['nickname'], data['description']
        try:
            user.email=newEmail
            profile.nickname=newNickname
            profile.description=newDescription
            user.save()
            profile.save()
            return Response({'succcess':'update profile'})
        except:
            return Response({'failed':'error'})


# @api_view(['GET'])
# def getUserProfile(request, pk):
#     user=User.objects.get(id=pk)
#     profile=UserDetail.objects.get(user_id=pk)
#     userSerializer=UserSerializer(user, many=False)
#     profileSerializer=ProfileSerializer(profile, many=False)
#     return Response({'user':userSerializer.data, 'profile':profileSerializer.data})

@api_view(['GET'])
def getRooms(request):
    rooms = Room.objects.all()
    # many -> serialize many objects. True rooms a query of objects
    serializer = RoomSerializer(rooms, many=True)
    return Response(serializer.data)

@api_view(['GET'])
# primary key pk
def getRoom(request, pk):
    room = Room.objects.get(id=pk)
    # many -> serialize many objects. True rooms a query of objects
    serializer = RoomSerializer(room, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getTopics(request):
    topics=Topic.objects.all()
    serializer=TopicSerializer(topics, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getSampleMessages(request):
    content=[]
    samlpeMessages=Message.objects.all()[:10]
    for message in samlpeMessages:
        messageSerializer=MessageSerializer(message, many=False)
        userSerializer=UserSerializer(User.objects.get(id=message.user.id), many=False)
        content.append({'user':userSerializer.data, 'message':messageSerializer.data})
    #serializer=MessageSerializer(samlpeMessages, many=True)
    return Response(content)

@api_view(['GET'])
def getMessagesByRoom(request, pk):
    content=[]
    room=Room.objects.get(id=pk) 
    roomMessages=room.message_set.all()
    participants=room.participants.all()
    for message in roomMessages:
        messageSerializer=MessageSerializer(message, many=False)
        userSerializer=UserSerializer(participants.get(id=message.user.id), many=False)
        content.append({'user':userSerializer.data, 'message':messageSerializer.data})    
    return Response(content)

@method_decorator(csrf_protect, name='dispatch')
class signUpView(APIView):
    permission_classes=(permissions.AllowAny, )

    def post(self, request, format=None):
        data=self.request.data
        username, password, repassword=data['username'], data['password'], data['repassword']
        if User.objects.filter(username=username).exists():
            return Response({'user already exists, redirect to login'})
        elif len(password)<8:
            return Response({'pwd too short'})
        elif password!=repassword:
            return Response({'pwd does not match'})
        else:
            newUser=User.objects.create_user(username=username, password=password)
            newUser.save()
            userProfile=UserDetail.objects.create(user=newUser)
            userProfile.save()
            return Response({'Okay'})

@method_decorator(csrf_protect, name='dispatch')
class LoginView(APIView):
    permission_classes=(permissions.AllowAny, )
    def post(self, request, format=None):
        data=self.request.data
        username=data['username']
        password=data['password']
        user=authenticate(username=username, password=password)
        if user:
            login(request, user)
            return Response({'username': username})
        else:
            return Response({'Error':'Error'})

class LogoutView(APIView):
    def post(self, request, format=None):
        try:
            logout(request)
            return Response({'success':'logout'})
        except:
            return Response({'error':'fail to logout'})

@method_decorator(ensure_csrf_cookie, name='dispatch')
class CSRFToken(APIView):
    permission_classes=(permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({'get CSRF token'})



