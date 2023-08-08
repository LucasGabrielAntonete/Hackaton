from django.db import models


class tamanho(models.Model):
    tamanho = models.CharField(max_length=50)


class festa(models.Model):
    nome = models.CharField(max_length=100)
    descrição = models.CharField(max_length=250)
    tamanho = models.ForeignKey(tamanho, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome


class debutantes(models.Model):
    nome = models.CharField(max_length=100)
    descrição = models.CharField(max_length=250)
    tamanho = models.ForeignKey(tamanho, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome
    

class noivas(models.Model):
    nome = models.CharField(max_length=100)
    descrição = models.CharField(max_length=250)
    tamanho = models.ForeignKey(tamanho, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome
