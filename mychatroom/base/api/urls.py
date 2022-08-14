from django.urls import URLPattern, path
from . import views

urlpatterns = [
    path('',views.getRoutes),

    # check user status
    path('authenticated/', views.CheckAuthenticatedView.as_view()), 

    # login logout
    path('login/', views.LoginView.as_view()),
    path('logout/', views.LogoutView.as_view()),

    # GET api for user & user profile
    path('profile/', views.UserProfile.as_view()), 

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