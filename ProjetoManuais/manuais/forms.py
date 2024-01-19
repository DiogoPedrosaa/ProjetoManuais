from django import forms
from .models import Fluxograma

class FluxogramaForm(forms.ModelForm):
    class Meta:
        model = Fluxograma
        fields = ['nome', 'descricao', 'link']