from indicnlp.tokenize import indic_tokenize

def nepali_tokenizer(text):
    return indic_tokenize.trivial_tokenize(text, lang='ne')