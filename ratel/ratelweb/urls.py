from django.urls import path
from . import views
from django.conf.urls import url
from .views import BookView, SignView, FavorsView, PaperView, LoginView, FavorView, RecommendView

urlpatterns = [
    url("^book/$", BookView.as_view(), name="book"),
    url("^sign/$", SignView.as_view(), name="sign"),
    url("^login/$", LoginView.as_view(), name="login"),
    url("^favor/$", FavorView.as_view(), name="favor"),
    url("^favors/$", FavorsView.as_view(), name="favors"),
    url("^paper/$", PaperView.as_view(), name="paper"),
    url("^recommend/$", RecommendView.as_view(), name="recommend"),

    path('', views.homepage, name='homepage'),
    path('subpage', views.subpage, name='subpage'),
]
