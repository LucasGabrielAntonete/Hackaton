from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet

from momentoespecial.models import tamanho, categoria, produto
from momentoespecial.serializers import tamanhoSerializer, categoriaSerializer, produtoSerializer

class categoriaViewSet(ModelViewSet):
    queryset = categoria.objects.all()
    serializer_class = categoriaSerializer


class tamanhoViewSet(ModelViewSet):
    queryset = tamanho.objects.all()
    serializer_class = tamanhoSerializer


class produtoViewSet(ModelViewSet):
    queryset = produto.objects.all()
    serializer_class = produtoSerializer
    




