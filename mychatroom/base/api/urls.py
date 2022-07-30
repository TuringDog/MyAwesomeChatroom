from django.urls import URLPattern, path
from . import views

urlpatterns = [
    path('',views.getRoutes),

    # GET api for user & user profile
    path('profile/<str:pk>', views.getUserProfile), 

    # GET api for room info
    path('rooms/', views.getRooms),
    path('rooms/<str:pk>/', views.getRoom),

    # GET api for topic info
    path('topics/', views.getTopics), 

    # GET api for messages
    path('messages/', views.getSampleMessages), 
    path('messages/<str:pk>', views.getMessagesByRoom), 

    # GET api for csrf token
    path('csrf_cookie/', views.CSRFToken.as_view()), 

    # POST api for register
    path('register/', views.signUpView.as_view()), 
]