import os
import joblib
from sentiment.tokenizer import nepali_tokenizer


BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model = joblib.load(os.path.join(BASE_DIR, 'sentiment_model.joblib'))
vectorizer = joblib.load(os.path.join(BASE_DIR, 'vectorizer.joblib'))
# Reassign the tokenizer to avoid AttributeError during predict
vectorizer.tokenizer = nepali_tokenizer
def predict_sentiment(text):
    vect = vectorizer.transform([text])
    pred = model.predict(vect)
    return int(pred[0])
