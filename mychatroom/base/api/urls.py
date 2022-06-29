from django.urls import URLPattern, path
from . import views

urlpatterns = [
    path('',views.getRoutes),
    path('rooms/',views.getRooms),
    # dynamic string pk
    path('rooms/<str:pk>/',views.getRoom),
]