from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home),
    path('room/', views.room)
]
