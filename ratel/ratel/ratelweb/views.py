from django.shortcuts import render

# Create your views here.

def homepage(request):
    return render(request, 'homepage.html')

def subpage(request):
    return render(request, 'subpage.html')