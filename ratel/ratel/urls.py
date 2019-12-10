"""ratel URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import include
from django.views.generic import RedirectView, TemplateView
from ratelweb import urls
from django.conf.urls import include, url

# 리액트의 index.html


class HomeTemplateView(TemplateView):
    template_name = 'index.html'


urlpatterns = [
    path('admin/', admin.site.urls),
    # /ratel/ 로 들어오면 ratelweb의 url에서 매핑
    path('ratel/', include('ratelweb.urls')),
    path('', HomeTemplateView.as_view(), name='home'),
    url(r"^api/", include(urls))
    # / 로 들어오면 ratel/ 로 리다이렉트
    # path('', RedirectView.as_view(url='ratel/', permanent=True)),
]
