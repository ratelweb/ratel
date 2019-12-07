from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BookSerializer
from .models import Books

# Create your views here.


def homepage(request):
    return render(request, 'homepage.html')


def subpage(request):
    return render(request, 'subpage.html')


# class BookViewSet(viewsets.ModelViewSet):
#     serializer_class = BookSerializer

#     def get_queryset(self):
#         return Books.objects.all().order_by("-created_at")

#     def perform_create(self, serializer):
#         serializer.save()
