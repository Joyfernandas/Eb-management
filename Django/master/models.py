from calendar import month
import email
from statistics import mode
from tokenize import blank_re
from unicodedata import name
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from users.models import CustomUser
from django.contrib.auth.models import Group


# Create your models here.



class Eb_management(models.Model):
    name=models.CharField("Name",max_length=15,null=True,blank=False)
    place=models.CharField("Place",max_length=20,null=True,blank=False)
    mobile=models.CharField("Mobile",max_length=10,null=True,blank=False)
    email=models.EmailField("Email",max_length=20,null=True,blank=False)
    address=models.CharField("Adddress",max_length=100,null=True,blank=False)

    def __str__(self) -> str:
        return self.name


class Employee(models.Model):
    name=models.CharField("Name",max_length=15,null=True,blank=False)
    age=models.IntegerField("Age",null=True,blank=False)
    mobile=models.CharField("Mobile",max_length=10,null=True,blank=False)
    email=models.EmailField("Email",max_length=20,null=True,blank=False)
    address=models.CharField("Adddress",max_length=100,null=True,blank=False)

    def __str__(self) -> str:
        return self.name

class Connection(models.Model):
    connection_type=models.CharField("Connection Type",max_length=10,null=True,blank=False)

    def __str__(self) -> str:
        return self.connection_type

class Unitper_Amount(models.Model):
    connection=models.OneToOneField(Connection,on_delete=models.RESTRICT,null=True,blank=False)
    amount=models.CharField("Per Unit Amount",max_length=10,null=True,blank=False)

    def __str__(self) -> str:
        return self.amount


class Customer(models.Model):
    consumer_nub=models.IntegerField("Consumer Num",null=True,blank=False)
    name=models.CharField("Name",max_length=15,null=True,blank=False)
    email=models.EmailField("Email",max_length=40,null=True,blank=False)
    password=models.CharField("Password",max_length=20,null=True,blank=False)
    mobile=models.CharField("Mobile",max_length=10,null=True,blank=False)
    Door_No=models.IntegerField("Door No",null=True,blank=False)
    pincode=models.IntegerField("Pincode",null=True,blank=False)
    address=models.TextField("Address",max_length=50,null=True,blank=False)
    type=models.ForeignKey("master.Connection",on_delete=models.RESTRICT,null=True,blank=False)
    ctype = models.CharField(
        "CustomerType", max_length=100, null=True, blank=True, default='NewCustomer')

    def __str__(self) -> str:
        return self.name 

@receiver(post_save, sender=Customer)
def event_attender_create(sender, instance, *args, **kwargs):
    if instance and kwargs['created']:
        user = CustomUser.objects.create(email=instance.email, username=instance.name.lower(),
                                         customer=instance, role="NewCustomer", is_staff=True)
        user.set_password(instance.password)
        if instance.ctype == "NewCustomer":
            if Group.objects.filter(name='NewUser').exists():
                user.groups.add(Group.objects.get(name='NewUser'))
        user.save()
    return True



class Unit(models.Model):
    customer=models.ForeignKey("master.Customer",on_delete=models.RESTRICT,null=True,blank=False)
    unit_consumed=models.CharField("Unit Consumed",max_length=10,null=True,blank=False)
    type=models.ForeignKey("master.Connection",on_delete=models.RESTRICT,null=True,blank=False)
    per_unit=models.ForeignKey("master.Unitper_Amount",on_delete=models.RESTRICT,null=True,blank=False)
    start_date=models.DateField("Start date",null=True,blank=False)
    end_date=models.DateField("End date",null=True,blank=False)
    amount=models.CharField("Amount",max_length=10,null=True,blank=False)
    month=models.CharField("Month",max_length=10,null=True,blank=False)
     
    
    def __str__(self) -> str:
        return str(self.customer.name)


class Payment(models.Model):
    customer=models.ForeignKey("master.Unit",on_delete=models.RESTRICT,null=True,blank=False)
    pay_date=models.DateField("pay date",null=True,blank=True)
    pay_time=models.TimeField("pay time",null=True,blank=True)
    email=models.EmailField("Email",max_length=25,null=True,blank=False)
    


    def __str__(self) -> str:
        return str(self.customer)+"-"+str(self.customer.amount)+"-"+str(self.customer.month)

