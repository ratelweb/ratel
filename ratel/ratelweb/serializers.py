from rest_framework import serializers
from django import forms
# from .models import Books

# 뷰에서 바로 넘겨주는 용도


class BookSerializer(serializers.Serializer):
    bookname = serializers.CharField(max_length=1000)
    author = serializers.CharField(max_length=1000)
    publisher = serializers.CharField(max_length=1000)
    # bookImageURL = serializers.CharField(max_length=1000)
    description = serializers.CharField(max_length=1000)
    isbn = serializers.CharField(max_length=1000)


class SearchSerializer(serializers.Serializer):
    search = serializers.DictField(BookSerializer(many=False))


''' 모델에서 받아서 넘겨주는 용도
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ("id", "text") '''
