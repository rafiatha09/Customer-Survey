from django.urls import path
from . import views

urlpatterns = [
    path('customers/', views.customer_list, name='customer-list'),
    path('customers/<int:pk>/', views.customer_delete, name='customer-delete'),
]
