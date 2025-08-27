# Nepali Sentimental_Analysis
# Sentimental analysis project for classifying Nepali-Language sentences into positive,negative,or neutral categories using Machine Learning 
1. Dataset
    1. Source : https://www.kaggle.com/datasets/aayamoza/nepali-sentiment-analysis?resource=download
    2. nearly 4200 labeled sentences 
    3. Sentiment lables
        1. 1 :positive
        2. 0 : neutral
        3. -1 :negative

2. Tools and Libraries used
   1. python
   2. pandas
   3. scikit-learn
   4. Tokenization : indic_nlp
   5. joblib
   6. re (Regex)
3. Model Workflow
   1. Data preprocessing
      1. Data Cleaning
      2. Tokenization
      3. Stop word
    2. Feature Extraction
       1. TF-IDF 
       2. class weight balancing
    3. Model Training
       1. Support Vector Machine (SVM)
    4. Evaluation
       1. Accuracy
       2. recall
       3. precision
       4. f1-score