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
    

class damas(models.Model):
    nome = models.CharField(max_length=100)
    descrição = models.CharField(max_length=250)
    tamanho = models.ForeignKey(tamanho, on_delete=models.CASCADE)    

    def __str__(self):
        return self.nome

class pajens(models.Model):
    nome = models.CharField(max_length=100)
    descrição = models.CharField(max_length=250)
    tamanho = models.ForeignKey(tamanho, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome
    

class vestido(models.Model):
    id = models.IntegerField(primary_key=True)
    festa = models.ForeignKey(
        festa, on_delete=models.PROTECT, related_name="vestido_festa")
    debutantes = models.ForeignKey(
        debutantes, on_delete=models.PROTECT, related_name="vestido_debutantes")
    noivas = models.ForeignKey(
        noivas, on_delete=models.PROTECT, related_name="vestido_noivas")
    damas = models.ForeignKey(
        damas, on_delete=models.PROTECT, related_name="vestido_damas")
    pajens = models.ForeignKey(
        pajens, on_delete=models.PROTECT, related_name="vestido_pajens")
    
    def __str__(self):
        return self.id