from django.contrib import admin

from .models import tamanho, categoria, produto, Compra, ItensCompra


admin.site.register(tamanho)
admin.site.register(categoria)
admin.site.register(produto)
admin.site.register(Compra)
admin.site.register(ItensCompra)