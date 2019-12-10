from django.shortcuts import render
#from rest_framework import viewsets
#from .serializers import BookSerializer
#from .models import Books
from rest_framework import views
from rest_framework.response import Response
from .serializers import SearchSerializer
import bookinfo
import paper
import dbfunc

import requests

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

    def post(self, request):

        print(request.body.decode("utf-8"))
        self.bookname = request.body.decode("utf-8")
        self.bookinf = bookinfo.searchBook(self.bookname)
        # print(self.bookinf)
        #results = SearchSerializer(self.bookinf, many=True).data
        results = json.dumps(self.bookinf, ensure_ascii=False)

        #print("results: ", results)
        return Response(results)


class SignView(views.APIView):

    id = {}

    def post(self, request):
        print(request.body.decode("utf-8"))
        self.id = json.loads(request.body.decode("utf-8"))

        results = dbfunc.search_user(self.id["username"])
        if results:
            return Response(False)
        dbfunc.add_user(self.id["username"])
        results = dbfunc.search_user(self.id["username"])

        # print(self.bookinf)
        # results = SearchSerializer(self.bookinf, many=True).data
        results = json.dumps(results, ensure_ascii=False)

        # print("results: ", results)
        return Response(results)


class RecommendView(views.APIView):
    bookname = "해리포터"
    recommendinf = {}

    def post(self, request):

        print(request.body.decode("utf-8"))
        self.bookname = request.body.decode("utf-8")
        self.recommendinf = bookinfo.recommand(self.bookname)
        # print(self.bookinf)
        #results = SearchSerializer(self.bookinf, many=True).data
        results = self.recommendinf

        #print("results: ", results)
        return Response(results)


class PaperView(views.APIView):
    papername = "해리포터"
    paperinf = {}

    def post(self, request):

        print(request.body.decode("utf-8"))
        self.papername = request.body.decode("utf-8")
        self.paperinf = paper.Paper(self.papername)
        # print(self.bookinf)
        #results = SearchSerializer(self.bookinf, many=True).data
        results = self.paperinf

        #print("results: ", results)
        return Response(results)
