from django.urls import path
from .views import sentiment_api
urlpatterns = [
    path('api/sentiment/',sentiment_api)
]
