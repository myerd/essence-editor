from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view

from .serializers import *
from .models import *

#Views for CARD
@api_view(['GET', 'POST', 'DELETE'])
def card_list(request):
    if request.method == 'GET':
        cards = Card.objects.all()

        title = request.GET.get('title', None)
        if title is not None:
            cards = cards.filter(title__contains=title)

        cards_serializer = CardSerializer(cards, many=True)
        return JsonResponse(cards_serializer.data, safe=False)

    elif request.method == 'POST':
        card_data = JSONParser().parse(request)
        card_serializer = CardSerializer(data=card_data)
        if card_serializer.is_valid():
            card_serializer.save()
            return JsonResponse(card_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse({'message': 'VITUIKS MENI'}, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Card.objects.all().delete()
        return JsonResponse({'message': '{} Cards were deleted successfully!'.format(count[0])},
                            status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def card_detail(request, pk):
    try:
        card = Card.objects.get(pk=pk)
    except Card.DoesNotExist:
        return JsonResponse({'message': 'The Card does no exist'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        card_serializer = CardSerializer(card)
        return JsonResponse(card_serializer.data)

    elif request.method == 'PUT':
        card_data = JSONParser().parse(request)
        card_serializer = CardSerializer(card, data=card_data)
        if card_serializer.is_valid():
            card_serializer.save()
            return JsonResponse(card_serializer.data)
        return JsonResponse(card_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        card.delete()
        return JsonResponse({'message': 'Card was deleted succesfully!'}, status= status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def card_list_completed(request):
    cards = Card.objects.filter(completed=True)

    if request.method == 'GET':
        cards_serializer = CardSerializer(cards, many=True)
        return JsonResponse(cards_serializer.data, safe=False)


#Project API views:
@api_view(['GET', 'POST'])
def project_list(request):
    if request.method == 'GET':
        projects = Project.objects.all()
        projects_serializer = ProjectSerializer(projects, many=True)
        return JsonResponse(projects_serializer.data, safe=False)
    elif request.method == 'POST':
        project_data = JSONParser().parse(request)
        project_serializer = ProjectSerializer(data=project_data)
        if project_serializer.is_valid():
            project_serializer.save()
            return JsonResponse(project_serializer.data, status=status.HTTP_201_CREATED)


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
        softwaresystems_serializer = SoftwareSystemsSerializer(requirements, many=True)
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


#Customer API views:
@api_view(['GET', 'POST'])
def customer_list(request, pk):
    if request.method == 'GET':
        try:
            customers = Customer.objects.filter(project=pk)
        except:
            return JsonResponse({'message': 'No solutions for this project exists'},
                                status=status.HTTP_400_BAD_REQUEST)
        customers_serializer = CustomerSerializer(customers, many=True)
        return JsonResponse(customers_serializer.data, safe=False)

    elif request.method == 'POST':
        customer_data = JSONParser().parse(request)
        customer_serializer = CustomerSerializer(data=customer_data)
        if customer_serializer.is_valid():
            customer_serializer.save()
            return JsonResponse(customer_serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def opportunity(request, pk):
    if request.method == 'GET':
        try:
            opportunities = Opportunity.objects.filter(customer=pk)
        except:
            return JsonResponse({'message': 'No Requirements for this solution exists'},
                                status=status.HTTP_400_BAD_REQUEST)
        opportunities_serializer = OpportunitySerializer(opportunities, many=True)
        return JsonResponse(opportunities_serializer.data, safe=False)

    elif request.method == 'POST':
        opportunities_data = JSONParser().parse(request)
        opportunity_serializer = OpportunitySerializer(data=opportunities_data)
        if opportunity_serializer.is_valid():
            opportunity_serializer.save()
            return JsonResponse(opportunity_serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def opportunities_card_list(request, pk):
    try:
        cards = Card.objects.filter(opportunity=pk)
    except:
        return JsonResponse({'message': 'The opportunities does not exist'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        cards_serializer = CardSerializer(cards, many=True)
        return JsonResponse(cards_serializer.data, safe=False)


@api_view(['GET', 'POST'])
def stakeholders(request, pk):
    if request.method == 'GET':
        try:
            stakeholders = Stakeholders.objects.filter(customer=pk)
        except:
            return JsonResponse({'message': 'No Stakeholders for this customer exists'},
                                status=status.HTTP_400_BAD_REQUEST)
        stakeholders_serializer = StakeholdersSerializer(stakeholders, many=True)
        return JsonResponse(stakeholders_serializer.data, safe=False)

    elif request.method == 'POST':
        stakeholders_data = JSONParser().parse(request)
        stakeholders_serializer = StakeholdersSerializer(data=stakeholders_data)
        if stakeholders_serializer.is_valid():
            stakeholders_serializer.save()
            return JsonResponse(stakeholders_serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def stakeholders_card_list(request, pk):
    try:
        cards = Card.objects.filter(stakeholders=pk)
    except:
        return JsonResponse({'message': 'The stakeholders does not exist'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        cards_serializer = CardSerializer(cards, many=True)
        return JsonResponse(cards_serializer.data, safe=False)


#Endeavor API views:
@api_view(['GET', 'POST'])
def endeavor_list(request, pk):
    if request.method == 'GET':
        try:
            endeavor = Endeavor.objects.filter(project=pk)
        except:
            return JsonResponse({'message': 'No solutions for this project exists'},
                                status=status.HTTP_400_BAD_REQUEST)
        endeavor_serializer = EndeavorSerializer(endeavor, many=True)
        return JsonResponse(endeavor_serializer.data, safe=False)

    elif request.method == 'POST':
        endeavor_data = JSONParser().parse(request)
        endeavor_serializer = EndeavorSerializer(data=endeavor_data)
        if endeavor_serializer.is_valid():
            endeavor_serializer.save()
            return JsonResponse(endeavor_serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
def team_detail(request, pk):
    try:
        team = Team.objects.get(pk=pk)
    except:
        return JsonResponse({'message': 'The Team does no exist'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        team_serializer = TeamSerializer(team)
        return JsonResponse(team_serializer.data)

    elif request.method == 'PUT':
        team_data = JSONParser().parse(request)
        team_serializer = TeamSerializer(team, data=team_data)
        if team_serializer.is_valid():
            team_serializer.save()
            return JsonResponse(team_serializer.data)
        return JsonResponse(team_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        team.delete()
        return JsonResponse({'message': 'Team was deleted succesfully!'}, status=status.HTTP_204_NO_CONTENT)


#API views for TEAM objects:
@api_view(['GET', 'POST'])
def team_list(request):
    if request.method == 'GET':
        teams = Team.objects.all()
        teams_serializer = TeamSerializer(teams, many=True)
        return JsonResponse(teams_serializer.data, safe=False)

    elif request.method == 'POST':
        team_data = JSONParser().parse(request)
        team_serializer = TeamSerializer(data=team_data)
        if team_serializer.is_valid():
            team_serializer.save()
            return JsonResponse(team_serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def team_card_list(request, k):
    try:
        cards = Card.objects.filter(team=k)
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
            return JsonResponse({'message': 'No Requirements for this solution exists'},
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
