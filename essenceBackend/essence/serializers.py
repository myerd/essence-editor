from rest_framework import serializers
from essence.models import *


class CardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Card
        fields = ('id',
                  'title',
                  'description',
                  'completed')


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ('id',
                  'title',
                  'description',
                  'solution',
                  'customer',
                  'endeavor')