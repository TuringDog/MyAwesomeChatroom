from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name="room"),
    path('room/<str:pk>/', views.room, name="room")
]
