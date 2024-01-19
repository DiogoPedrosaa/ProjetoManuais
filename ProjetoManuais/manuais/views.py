from django.http import HttpResponse
from django.shortcuts import render, redirect
from manuais.models import Fluxograma
from .forms import FluxogramaForm


def home(request):
    fluxogramas = Fluxograma.objects.all()
    return render(request, 'ManuaisSefaz/home.html', {'fluxogramas': fluxogramas})


def cadastro_fluxograma(request):
    if request.method == 'POST':
        form = FluxogramaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')  
    else:
        form = FluxogramaForm()

    return render(request, 'ManuaisSefaz/cadastro_fluxograma.html', {'form': form})