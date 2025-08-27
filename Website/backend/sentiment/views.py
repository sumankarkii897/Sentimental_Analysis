

# Create your views here.

from django.views.decorators.csrf import csrf_exempt
import json
from .ml_model import predict_sentiment
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import os
import jwt  # Added import for PyJWT
import joblib
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer, SentimentResultSerializer
from .models import SentimentResult
import os
import joblib
import json
import logging
logger = logging.getLogger(__name__)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model = joblib.load(os.path.join(BASE_DIR, 'sentiment_model.joblib'))
vectorizer = joblib.load(os.path.join(BASE_DIR, 'vectorizer.joblib'))
# @csrf_exempt
# def sentiment_api(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         sentence = data.get('sentence', '')
#         prediction = predict_sentiment(sentence)
#         sentiment_map = {0: "Negative", 1: "Positive"}
#         return JsonResponse({'sentiment': sentiment_map.get(prediction, "Unknown")})
#     return JsonResponse({'error': 'Only POST allowed'}, status=400)

# def sentiment_api(request):
#     if request.method == 'OPTIONS':
#         return HttpResponse(status=200)
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             sentence = data.get('sentence', '')
#             vect = vectorizer.transform([sentence])
#             pred = model.predict(vect)
#             sentiment_map = {-1: "Negative", 0: "Neutral", 1: "Positive"}
#             sentiment = sentiment_map.get(pred[0])
#             return JsonResponse({'sentiment': sentiment})
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=500)
#     return JsonResponse({'error': 'Only POST allowed'}, status=405)


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model = joblib.load(os.path.join(BASE_DIR, 'sentiment_model.joblib'))
vectorizer = joblib.load(os.path.join(BASE_DIR, 'vectorizer.joblib'))

# Signup and Login views (unchanged)
class SignupView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'username': user.username
            })
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# New sentiment_api view
# @csrf_exempt
# def sentiment_api(request):
#     if request.method == 'OPTIONS':
#         return HttpResponse(status=200)
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             sentence = data.get('sentence', '')
#             vect = vectorizer.transform([sentence])
#             pred = model.predict(vect)
#             sentiment_map = {-1: "Negative", 0: "Neutral", 1: "Positive"}
#             sentiment = sentiment_map.get(pred[0])
#             return JsonResponse({'sentiment': sentiment})
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=500)
#     return JsonResponse({'error': 'Only POST allowed'}, status=405)
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def sentiment_api(request):
    try:
        sentence = request.data.get("sentence", "")

        # Run prediction
        vect = vectorizer.transform([sentence])
        pred = model.predict(vect)
        sentiment_map = {-1: "Negative", 0: "Neutral", 1: "Positive"}
        sentiment = sentiment_map.get(pred[0])

        # Save to DB with logged-in user
        SentimentResult.objects.create(
            user=request.user,
            input_text=sentence,
            sentiment=sentiment
        )

        return Response({"sentiment": sentiment}, status=200)
    except Exception as e:
        return Response({"error": str(e)}, status=500)