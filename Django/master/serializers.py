from rest_framework import serializers
from master.models import *

class eb_managementserializers(serializers.ModelSerializer):
    class Meta:
        model=Eb_management
        fields='__all__'

class employeeserializers(serializers.ModelSerializer):
    class Meta:
        model=Employee
        fields='__all__'



class connectionserializers(serializers.ModelSerializer):
    class Meta:
        model=Connection
        fields='__all__'

class unitper_Amountserializers(serializers.ModelSerializer):
    class Meta:
        model=Unitper_Amount
        fields='__all__'

    def to_representation(self,instance):
        res=super().to_representation(instance)
        res['connection']=[instance.connection.connection_type]
        return res

class customerserializers(serializers.ModelSerializer):
    class Meta:
        model=Customer
        fields='__all__'

    def to_representation(self,instance):
        res=super().to_representation(instance)
        res['type']=[instance.type.connection_type]
        return res



class unitserializers(serializers.ModelSerializer):
    class Meta:
        model=Unit
        fields='__all__'

    def to_representation(self,instance):
        res=super().to_representation(instance)
        res['customer']=[instance.customer.name]
        res['type']=[instance.type.connection_type]
        return res

    



class paymentserializers(serializers.ModelSerializer):
    class Meta:
        model=Payment
        fields='__all__'

    