from django.shortcuts import render
#from rest_framework import viewsets
#from .serializers import BookSerializer
#from .models import Books
from rest_framework import views
from rest_framework.response import Response
from .serializers import SearchSerializer
import bookinfo
from rest_framework import serializers
import json
#from ratel import bookinfo
# Create your views here.


def homepage(request):
    return render(request, 'homepage.html')


def subpage(request):
    return render(request, 'subpage.html')


class BookView(views.APIView):
    bookname = "해리포터"
    bookinf = {}

    def post(self, request, format=None):
        # print(request.body["content"])
        self.bookinf = bookinfo.searchBook(self.bookname)
        # print(self.bookinf)
        #results = SearchSerializer(self.bookinf, many=True).data
        results = json.dumps(self.bookinf, ensure_ascii=False)
        # print("results: ", results)
        return Response(results)
