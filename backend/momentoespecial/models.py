from django.db import models
from uploader.models import Image


class tamanho(models.Model):
    tamanho = models.CharField(max_length=50)

    def __str__(self):
        return self.tamanho


class categoria(models.Model):
    id_categoria = models.AutoField(primary_key=True)
    categoriaNome = models.CharField(max_length=50)

    def __str__(self):
        return self.categoriaNome


class produto(models.Model):
    id_produto = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=50)
    descricao = models.CharField(max_length=200)
    preco = models.FloatField()
    categoriaNome = models.ForeignKey(categoria, on_delete=models.CASCADE)
    id_tamanho = models.ForeignKey(tamanho, on_delete=models.CASCADE)
    capa = models.ForeignKey(
        Image,
        related_name="+",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        default=None,
    )