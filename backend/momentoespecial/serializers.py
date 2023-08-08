from rest_framework.serializers import ModelSerializer
from .models import tamanho, categoria, produto

class tamanhoSerializer(ModelSerializer):
    class Meta:
        model = tamanho
        fields = '__all__'


class categoriaSerializer(ModelSerializer):
    class Meta:
        model = categoria
        fields = '__all__'


class produtoSerializer(ModelSerializer):
    class Meta:
        model = produto
        fields = '__all__'



