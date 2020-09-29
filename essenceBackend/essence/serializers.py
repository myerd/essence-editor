from rest_framework import serializers
from essence.models import Card


class CardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Card
        fields = ('id',
                  'title',
                  'description',
                  'completed')
