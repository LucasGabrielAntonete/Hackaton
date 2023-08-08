from django.contrib import admin

from .models import tamanho, categoria, produto

admin.site.register(tamanho)
admin.site.register(categoria)
admin.site.register(produto)
