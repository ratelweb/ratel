from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('subpage', views.subpage, name='subpage'),
]
