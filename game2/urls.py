from django.urls import path
from . import views

urlpatterns= [
  path('do_voices/', views.do_voices, name='do_voices'),
  path('static/countries/', views.game2, name='countries'),
 path('game2/', views.game2, name='game2'),
 path('start/',views.start, name='start'),
 path('instructions/',views.instructions, name='instructions')
]
