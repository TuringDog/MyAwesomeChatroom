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