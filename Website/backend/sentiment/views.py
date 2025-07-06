from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .ml_model import predict_sentiment
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import os
import joblib
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model = joblib.load(os.path.join(BASE_DIR, 'sentiment_model.joblib'))
vectorizer = joblib.load(os.path.join(BASE_DIR, 'vectorizer.joblib'))
@csrf_exempt
# def sentiment_api(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         sentence = data.get('sentence', '')
#         prediction = predict_sentiment(sentence)
#         sentiment_map = {0: "Negative", 1: "Positive"}
#         return JsonResponse({'sentiment': sentiment_map.get(prediction, "Unknown")})
#     return JsonResponse({'error': 'Only POST allowed'}, status=400)
def sentiment_api(request):
    if request.method == 'OPTIONS':
        return HttpResponse(status=200)
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            sentence = data.get('sentence', '')
            vect = vectorizer.transform([sentence])
            pred = model.predict(vect)
            sentiment_map = {-1: "Negative", 0: "Neutral", 1: "Positive"}
            sentiment = sentiment_map.get(pred[0])
            return JsonResponse({'sentiment': sentiment})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Only POST allowed'}, status=405)