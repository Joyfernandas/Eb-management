from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from master.models import *

# Create your views here.

class eb_managementview(viewsets.ModelViewSet):
    queryset=Eb_management.objects.all()
    serializer_class=eb_managementserializers

class employeeview(viewsets.ModelViewSet):
    queryset=Employee.objects.all()
    serializer_class=employeeserializers



class connectionview(viewsets.ModelViewSet):
    queryset=Connection.objects.all()
    serializer_class=connectionserializers

class unitper_Amountview(viewsets.ModelViewSet):
    queryset=Unitper_Amount.objects.all()
    serializer_class=unitper_Amountserializers

class customerview(viewsets.ModelViewSet):
    queryset=Customer.objects.all()
    serializer_class=customerserializers

class unitview(viewsets.ModelViewSet):
    queryset=Unit.objects.all()
    serializer_class=unitserializers

class paymentview(viewsets.ModelViewSet):
    queryset=Payment.objects.all()
    serializer_class=paymentserializers
