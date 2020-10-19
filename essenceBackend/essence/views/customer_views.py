from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view
from essence.serializers import *
from essence.models import *

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


