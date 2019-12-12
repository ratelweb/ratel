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
from collections import OrderedDict

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
        results = json.dumps(self.bookinf, ensure_ascii=False)

        return Response(results)


class SignView(views.APIView):

    id = {}

    def post(self, request):
        print(request.body.decode("utf-8"))
        self.id = json.loads(request.body.decode("utf-8"))

        results = dbfunc.search_user(self.id["username"])
        if results:
            return Response(False)
        dbfunc.add_user(self.id["username"], self.id["password"])

        return Response(True)


class LoginView(views.APIView):
    id = {}

    def post(self, request):
        print(request.body.decode("utf-8"))
        self.id = json.loads(request.body.decode("utf-8"))

        results = dbfunc.check_login(self.id["username"], self.id["password"])
        if results:
            return Response(True)

        return Response(False)


class FavorView(views.APIView):
    id = {}

    def post(self, request):
        print(request.body.decode("utf-8"))
        self.id = json.loads(request.body.decode("utf-8"))

        return Response(dbfunc.add_bookmark(self.id["username"], self.id["isbn"]))


class FavorsView(views.APIView):

    username = ""
    username2 = ""
    username3 = "min"

    favorsinf = OrderedDict()

    booklist = []

    def post(self, request):
        print(request.body.decode("utf-8"))
        self.username = json.loads(request.body.decode("utf-8"))

        self.username2 = request.body.decode("utf-8")
        print("username:", self.username)
        print("username2:", self.username2)
        print("username3:", self.username3)

        booklist = dbfunc.list_bookmark(self.username)

        print("booklist", self.booklist)

        self.favorsinf['favors'] = []

        for i in booklist:
            temp = bookinfo.Bookinfo_Isbn(i)
            print(temp)
            self.favorsinf["favors"].append({
                "bookname": temp['bookInfo']['bookname'],
                "author": temp['bookInfo']['author'],
                "publisher": temp['bookInfo']['publisher'],
                "bookImageURL": temp['bookInfo']['bookImageURL'],
                "description": temp['bookInfo']['description'],
                "isbn": temp['bookInfo']['isbn'],
            })

        results = json.dumps(self.favorsinf, ensure_ascii=False)
        print("results: ", results)
        return Response(results)

class PaperView(views.APIView):
    papername = "해리포터"
    paperinf = {}

    def post(self, request):

        print(request.body.decode("utf-8"))
        self.papername = request.body.decode("utf-8")
        self.paperinf = paper.Paper(self.papername)

        results = self.paperinf

        return Response(results)

class RecommendView(views.APIView):
    id = {}
    temp = ''
    recommendlist = OrderedDict()

    def post(self, request):
        print(request.body.decode("utf-8"))
        self.id = json.loads(request.body.decode("utf-8"))

        self.temp = dbfunc.find_isbn(self.id["username"])
        self.recommendlist = bookinfo.recommand(self.temp)

        print("recommendlist: ", self.recommendlist)
        return Response(self.recommendlist)
