from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RoomSerializer
from base.models import Room


@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET /api',
        'GET /api/rooms',
        'GET /api/rooms/:id',
    ]
    return Response(routes)

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