from django.db import models

class Fluxograma(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    link = models.URLField()

    def __str__(self):
        return self.nome