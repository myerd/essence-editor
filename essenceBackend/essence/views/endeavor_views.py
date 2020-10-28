from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view
from essence.serializers import *
from essence.models import *

# Endeavor API views:
@api_view(['GET', 'POST'])
def endeavor_list(request, pk):
    if request.method == 'GET':
        try:
            project = Project.objects.filter(user=request.user.id).filter(pk=pk)
        except:
            return JsonResponse({'message': 'No projects for this user'},
                                status=status.HTTP_400_BAD_REQUEST)
        if project:
            try:
                endeavor = Endeavor.objects.filter(project=pk)
            except:
                return JsonResponse({'message': 'No solutions for this project exists'},
                                     status=status.HTTP_400_BAD_REQUEST)
            endeavor_serializer = EndeavorSerializer(endeavor, many=True)
            return JsonResponse(endeavor_serializer.data, safe=False)
        else:
            return JsonResponse({'message': 'No projects for this user'},
                                status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'POST':
        endeavor_data = JSONParser().parse(request)
        endeavor_serializer = EndeavorSerializer(data=endeavor_data)
        if endeavor_serializer.is_valid():
            endeavor_serializer.save()
            return JsonResponse(endeavor_serializer.data, status=status.HTTP_201_CREATED)


# API views for TEAM objects:
@api_view(['GET', 'POST'])
def team_list(request, pk):
    if request.method == 'GET':
        try:
            team = Team.objects.filter(endeavor=pk)
        except:
            return JsonResponse({'message': 'No Team for this Endeavor exists'},
                                status=status.HTTP_400_BAD_REQUEST)
        team_serializer = TeamSerializer(team, many=True)
        return JsonResponse(team_serializer.data, safe=False)

    elif request.method == 'POST':
        team_data = JSONParser().parse(request)
        team_serializer = TeamSerializer(data=team_data)
        if team_serializer.is_valid():
            team_serializer.save()
            return JsonResponse(team_serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def team_card_list(request, pk):
    try:
        cards = Card.objects.filter(team=pk)
    except:
        return JsonResponse({'message': 'The Team does not exist'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        cards_serializer = CardSerializer(cards, many=True)
        return JsonResponse(cards_serializer.data, safe=False)


@api_view(['GET', 'POST'])
def work(request, pk):
    if request.method == 'GET':
        try:
            work = Work.objects.filter(endeavor=pk)
        except:
            return JsonResponse({'message': 'No Work for this Endeavor exists'},
                                status=status.HTTP_400_BAD_REQUEST)
        work_serializer = WorkSerializer(work, many=True)
        return JsonResponse(work_serializer.data, safe=False)

    elif request.method == 'POST':
        work_data = JSONParser().parse(request)
        work_serializer = WorkSerializer(data=work_data)
        if work_serializer.is_valid():
            work_serializer.save()
            return JsonResponse(work_serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def work_card_list(request, pk):
    try:
        cards = Card.objects.filter(work=pk)
    except:
        return JsonResponse({'message': 'The opportunities does not exist'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        cards_serializer = CardSerializer(cards, many=True)
        return JsonResponse(cards_serializer.data, safe=False)


@api_view(['GET', 'POST'])
def wayofwork(request, pk):
    if request.method == 'GET':
        try:
            wayofworks = WayOfWork.objects.filter(endeavor=pk)
        except:
            return JsonResponse({'message': 'No Requirements for this solution exists'},
                                status=status.HTTP_400_BAD_REQUEST)
        wayofwork_serializer = WayOfWorkSerializer(wayofworks, many=True)
        return JsonResponse(wayofwork_serializer.data, safe=False)

    elif request.method == 'POST':
        wayofwork_data = JSONParser().parse(request)
        wayofwork_serializer = WayOfWorkSerializer(data=wayofwork_data)
        if wayofwork_serializer.is_valid():
            wayofwork_serializer.save()
            return JsonResponse(wayofwork_serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def wayofwork_card_list(request, pk):
    try:
        cards = Card.objects.filter(wayofwo=pk)
    except:
        return JsonResponse({'message': 'The opportunities does not exist'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        cards_serializer = CardSerializer(cards, many=True)
        return JsonResponse(cards_serializer.data, safe=False)
