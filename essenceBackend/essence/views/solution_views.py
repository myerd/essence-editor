from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view
from essence.serializers import *
from essence.models import *


#Solution API views:
@api_view(['GET', 'POST'])
def solution_list(request, pk):
    if request.method == 'GET':
        try:
            solutions = Solution.objects.filter(project=pk)
        except:
            return JsonResponse({'message': 'No solutions for this project exists'},
                                status=status.HTTP_400_BAD_REQUEST)
        solutions_serializer = SolutionSerializer(solutions, many=True)
        return JsonResponse(solutions_serializer.data, safe=False)

    elif request.method == 'POST':
        solution_data = JSONParser().parse(request)
        solution_serializer = SolutionSerializer(data=solution_data)
        if solution_serializer.is_valid():
            solution_serializer.save()
            return JsonResponse(solution_serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def requirements(request, pk):
    if request.method == 'GET':
        try:
            requirements = Requirements.objects.filter(solution=pk)
        except:
            return JsonResponse({'message': 'No Requirements for this solution exists'},
                                status=status.HTTP_400_BAD_REQUEST)
        requirements_serializer = RequirementsSerializer(requirements, many=True)
        return JsonResponse(requirements_serializer.data, safe=False)

    elif request.method == 'POST':
        requirements_data = JSONParser().parse(request)
        requirements_serializer = RequirementsSerializer(data=requirements_data)
        if requirements_serializer.is_valid():
            requirements_serializer.save()
            return JsonResponse(requirements_serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def requirements_card_list(request, pk):
    try:
        cards = Card.objects.filter(requirements=pk)
    except:
        return JsonResponse({'message': 'The requiremensts does not exist'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        cards_serializer = CardSerializer(cards, many=True)
        return JsonResponse(cards_serializer.data, safe=False)


@api_view(['GET', 'POST'])
def softwaresystems(request, pk):
    if request.method == 'GET':
        try:
            softwaresystems = SoftwareSystems.objects.filter(solution=pk)
        except:
            return JsonResponse({'message': 'No Requirements for this solution exists'},
                                status=status.HTTP_400_BAD_REQUEST)
        softwaresystems_serializer = SoftwareSystemsSerializer(softwaresystems, many=True)
        return JsonResponse(softwaresystems_serializer.data, safe=False)

    elif request.method == 'POST':
        softwaresystems_data = JSONParser().parse(request)
        softwaresystems_serializer = SoftwareSystemsSerializer(data=softwaresystems_data)
        if softwaresystems_serializer.is_valid():
            softwaresystems_serializer.save()
            return JsonResponse(softwaresystems_serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def softwaresystems_card_list(request, pk):
    try:
        cards = Card.objects.filter(softwaresys=pk)
    except:
        return JsonResponse({'message': 'The SoS does not exist'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        cards_serializer = CardSerializer(cards, many=True)
        return JsonResponse(cards_serializer.data, safe=False)
