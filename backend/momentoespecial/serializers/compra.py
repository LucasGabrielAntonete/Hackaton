from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer, CharField

from momentoespecial.models import Compra, ItensCompra, produto


class ItensCompraSerializer(ModelSerializer):
    total = SerializerMethodField()
    class Meta:
        model = ItensCompra
        fields = ["produtos"] 
        depth = 1   

    def get_total(self, obj):
     return obj.produto.preco

class CompraSerializer(ModelSerializer):
    usuario = CharField(source="usuario.email", read_only=True)
    status = CharField(source="get_status_display", read_only=True)
    itens = ItensCompraSerializer(many=True, read_only=True)
    

    class Meta:
        model = Compra
        fields = ("id", "usuario", "status", "total", "itens")
