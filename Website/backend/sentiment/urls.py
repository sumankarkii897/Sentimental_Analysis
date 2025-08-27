from django.urls import path
from .views import sentiment_api,SignupView,LoginView
urlpatterns = [
    path('api/signup/', SignupView.as_view(), name='signup'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/sentiment/',sentiment_api, name='sentiment')
]
