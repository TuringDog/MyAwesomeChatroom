from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from .serializers import MessageSerializer, RoomSerializer, TopicSerializer, UserSerializer, ProfileSerializer

from base.models import Room, Topic, Message, User, UserDetail

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET /api',
        'GET /api/rooms',
        'GET /api/rooms/:id',
        'GET /api/topics'
    ]
    return Response(routes)

@api_view(['GET'])
def getUserProfile(request, pk):
    user=User.objects.get(id=pk)
    profile=UserDetail.objects.get(user_id=pk)
    userSerializer=UserSerializer(user, many=False)
    profileSerializer=ProfileSerializer(profile, many=False)
    return Response({'user':userSerializer.data, 'profile':profileSerializer.data})

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
    samlpeMessages=Message.objects.all()[:10]
    serializer=MessageSerializer(samlpeMessages, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getMessagesByRoom(request, pk):
    roomMessages=Message.objects.filter(room_id=pk)
    serializer=MessageSerializer(roomMessages, many=True)
    return Response(serializer.data)

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

@method_decorator(ensure_csrf_cookie, name='dispatch')
class CSRFToken(APIView):
    permission_classes=(permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({'get CSRF token'})



