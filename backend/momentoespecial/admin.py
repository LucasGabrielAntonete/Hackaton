from django.contrib import admin

from .models import tamanho, categoria, produto, Compra, ItensCompra


admin.site.register(tamanho)
admin.site.register(categoria)
admin.site.register(produto)
admin.site.register(ItensCompra)

class ItensCompraInline(admin.TabularInline):
    model = ItensCompra

@admin.register(Compra)
class CompraAdmin(admin.ModelAdmin):
    inlines = [ItensCompraInline]