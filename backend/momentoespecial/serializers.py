from rest_framework.serializers import ModelSerializer, SlugRelatedField
from .models import tamanho, categoria, produto
from uploader.models import Image
from uploader.serializers import ImageSerializer



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
        capa_attachment_key = SlugRelatedField(
        source="capa",
        queryset=Image.objects.all(),
        slug_field="attachment_key",
        required=False,
        write_only=True,
    )
        capa = ImageSerializer(required=False, read_only=True)
        
        model = produto
        fields = '__all__'



