from django.urls import path
from . import views
from django.conf.urls import url
from .views import BookView, SignView, RecommendView, PaperView

urlpatterns = [
    url("^book/$", BookView.as_view(), name="book"),
    url("^sign/$", SignView.as_view(), name="sign"),
    url("^recommend/$", RecommendView.as_view(), name="recommend"),
    url("^paper/$", PaperView.as_view(), name="paper"),
    #url("^books/(?P<pk>[0-9]+)/$", book_detail, name="book-detail"),
    path('', views.homepage, name='homepage'),
    path('subpage', views.subpage, name='subpage'),
]
