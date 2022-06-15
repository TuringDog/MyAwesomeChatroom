import imp
from django.http import HttpResponse
from mychatroom import settings
import os
from django.shortcuts import render
from django.shortcuts import render
# Create your views here.
rooms=[
    {'id':1, 'name':'Learn Python'}, 
    {'id':2, 'name':'Learn Java'}, 
    {'id':3, 'name':'Learn C++'} 
]
def home(request):
    return render(request, 'base/home.html', {'rooms':rooms})

def room(request):
    return render(request, 'base/room.html')

def index(request):
    try:
        with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
            return HttpResponse(f.read())
    except FileNotFoundError:
        print(open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')))
        print(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html'))
        print(settings.REACT_APP_DIR)
        return HttpResponse(
            """
            Please build the front-end using cd frontend && npm install && npm run build 
            """,
            status=501,
        )