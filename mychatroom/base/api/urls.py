from django.urls import URLPattern, path
from . import views

urlpatterns = [
    path('',views.getRoutes),

    # api for room info
    path('rooms/',views.getRooms),
    path('rooms/<str:pk>/',views.getRoom),

    # api for topic info
    path('topics/', views.getTopics), 

    # api for messages
    path('messages/', views.getSampleMessages), 
    path('messages/<str:pk>', views.getMessagesByRoom)
]