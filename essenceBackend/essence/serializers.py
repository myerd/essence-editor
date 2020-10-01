from rest_framework import serializers
from essence.models import *


class CardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Card
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'


#Endeavor serializers:
class EndeavorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Endeavor
        fields = '__all__'


class TeamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Team
        fields = '__all__'


class WorkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Work
        fields = '__all__'


class WayOfWorkSerializer(serializers.ModelSerializer):

    class Meta:
        model = WayOfWork
        fields = '__all__'


#Solution serializers:
class SolutionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Solution
        fields = '__all__'


class RequirementsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Requirements
        fields = '__all__'


class SoftwareSystemsSerializer(serializers.ModelSerializer):

    class Meta:
        model = SoftwareSystems
        fields = '__all__'


#Customer serializers:
class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = '__all__'


class StakeholdersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stakeholders
        fields = '__all__'


class OpportunitySerializer(serializers.ModelSerializer):

    class Meta:
        model = Opportunity
        fields = '__all__'
