from django.urls import path,include
from master.views import *
from rest_framework import routers


routers=routers.DefaultRouter()
routers.register("Eb-management",eb_managementview)
routers.register("Employee",employeeview)
routers.register("Connection",connectionview)
routers.register("Unitper_amount",unitper_Amountview)
routers.register("Customer",customerview)
routers.register("Unit",unitview)
routers.register("Payment",paymentview)



urlpatterns = [
  path('api/',include(routers.urls))
]