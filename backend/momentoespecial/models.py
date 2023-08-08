from django.db import models


class tamanho(models.Model):
    tamanho = models.CharField(max_length=50)


class categoria(models.Model):
    id_categoria = models.AutoField(primary_key=True)
    categoria = models.CharField(max_length=50)


class produto(models.Model):
    id_produto = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=50)
    descricao = models.CharField(max_length=200)
    preco = models.FloatField()
    id_categoria = models.ForeignKey(categoria, on_delete=models.CASCADE)
    id_tamanho = models.ForeignKey(tamanho, on_delete=models.CASCADE)
    imagem = models.ImageField(upload_to='produto', null=True, blank=True)