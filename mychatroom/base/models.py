import email
from turtle import update
from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Topic(models.Model):
    name=models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name

class Room(models.Model):
    host=models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    topic=models.ForeignKey(Topic, on_delete=models.SET_NULL, null=True)
    name=models.CharField(max_length=200)
    description=models.TextField(null=True, blank=True)
    participants=models.ManyToManyField(User, related_name='participants', blank=True)
    updated=models.DateTimeField(auto_now=True)
    created=models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering=['-updated', '-created']
        
    def __str__(self) -> str:
        return str(self.name)

class UserDetail(models.Model):
    user=models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    nickname=models.CharField(max_length=100)
    description=models.TextField(null=True, blank=True)
    interested_topic=models.ManyToManyField(Topic, related_name='intereseted_topic', blank=True)
    subscription=models.ManyToManyField(Room, related_name='subscription', blank=True)

    def __str__(self) -> str:
        return str(self.user)


class Message(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    room=models.ForeignKey(Room, on_delete=models.CASCADE)
    body=models.TextField()
    updated=models.DateTimeField(auto_now=True)
    created=models.DateTimeField(auto_now=True)

    class Meta:
        ordering=['-updated', '-created']
        
    def __str__(self) -> str:
        return self.body[0:50]