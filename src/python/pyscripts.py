from googletrans import Translator
translater=Translator()
out=translater.translate("क्या हाल चाल मेरे दोस्त",dest="en")
print(out.text)

