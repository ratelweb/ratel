from django.urls import path
from . import views
from django.conf.urls import url
# from .views import BookViewSet

# book_list = BookViewSet.as_view({"get": "list", "post": "create"})

# book_detail = BookViewSet.as_view(
#     {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
# )

urlpatterns = [
    # url("^books/$", book_list, name="book-list"),
    # url("^books/(?P<pk>[0-9]+)/$", book_detail, name="book-detail"),
    path('', views.homepage, name='homepage'),
    path('subpage', views.subpage, name='subpage'),
]
