from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Compra, ItensCompra, produto
from rest_framework.permissions import AllowAny

@api_view(['POST'])
@permission_classes([AllowAny]) 
def add_to_cart(request):
    print(request.data)
    produto_id = request.data.get('produto_id')
    quantidade = request.data.get('quantidade', 1)
    usuario = request.data.get('usuario')

    if(ItensCompra.objects.filter(produto=produto_id).exists()):
        return Response({"message": "Produto já adicionado ao carrinho."})
    
    else:
        compra = Compra.objects.filter(usuario=usuario).first()

        produto_instance = produto.objects.get(id=produto_id)

        itensCompra = ItensCompra.objects.create(produto=produto_instance, quantidade=quantidade, compra=compra)

        itensCompra.save()

    
        return Response({"message": "Produto adicionado ao carrinho com sucesso."})
