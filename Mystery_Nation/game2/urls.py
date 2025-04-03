from django.urls import path
from . import views

urlpatterns = [
  path('submit_score/', views.submit_score, name='submit_score'),
  path('leaderboard/', views.leaderboard, name='leaderboard'),  # The leaderboard page
    path('do_voices/', views.do_voices, name='do_voices'),  # Voice API
    path('game2/', views.game2, name='game2'),  # Main game page
    path('start/', views.start, name='start'),  # Game start page
    path('instructions/', views.instructions, name='instructions'),  # Instructions page
]
