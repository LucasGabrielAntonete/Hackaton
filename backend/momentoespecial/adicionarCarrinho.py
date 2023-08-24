from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from momentoespecial.models import Compra, ItensCompra
from rest_framework.permissions import AllowAny

@api_view(['POST'])
@permission_classes([AllowAny]) 
def add_to_cart(request):
    produto_id = request.data.get('produto_id')
    quantidade = request.data.get('quantidade', 1)
    usuario = request.user

    Compra, _ = Compra.objects.get_or_create(usuario=usuario, status=Compra.StatusCompra.CAR)
    
    produto, created = ItensCompra.objects.get_or_create(compra=Compra, produto_id=produto_id)
    
    if not created:
        produto.quantidade += quantidade
        produto.save()
    
    return Response({"message": "Produto adicionado ao carrinho com sucesso."})
