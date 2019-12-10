from django.shortcuts import render
#from rest_framework import viewsets
#from .serializers import BookSerializer
#from .models import Books
from rest_framework import views
from rest_framework.response import Response
from .serializers import YourSerializer
# Create your views here.

def homepage(request):
    return render(request, 'homepage.html')

def subpage(request):
    return render(request, 'subpage.html')

class BookView(views.APIView):

    def get(self, request, format=None):
        yourdata= [{"likes": 5, "comments": 10}, {"likes": 4, "comments": 23}]
        results = YourSerializer(yourdata, many=True).data
        return Response(results)
