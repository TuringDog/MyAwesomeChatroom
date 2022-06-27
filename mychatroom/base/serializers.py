from rest_framework import serializers
# from bas.models import Post
from base.models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'topic', 'name', 'host', 'description', 'updated','created')
        model = Room