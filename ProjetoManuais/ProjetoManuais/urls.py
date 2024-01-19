from django.urls import path
from manuais import views
from django.urls import include, path

urlpatterns = [
    path('', views.home, name='home'),
    path('cadastro_fluxograma/', views.cadastro_fluxograma, name='cadastro_fluxograma')
]