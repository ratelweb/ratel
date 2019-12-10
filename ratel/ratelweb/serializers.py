from rest_framework import serializers
# from .models import Books

# 뷰에서 바로 넘겨주는 용도
class YourSerializer(serializers.Serializer):
   """Your data serializer, define your fields here."""
   bookname = serializers.IntegerField()
   authors = serializers.IntegerField()

''' 모델에서 받아서 넘겨주는 용도
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ("id", "text") '''