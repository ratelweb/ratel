from django.urls import path
from . import views
from django.conf.urls import url
from .views import BookView

urlpatterns = [
    url("^book/$", BookView.as_view(), name="book"),
    #url("^books/(?P<pk>[0-9]+)/$", book_detail, name="book-detail"),
    path('', views.homepage, name='homepage'),
    path('subpage', views.subpage, name='subpage'),
]
