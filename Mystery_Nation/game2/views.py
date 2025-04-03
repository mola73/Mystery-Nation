from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from django.http import JsonResponse
from .models import PlayerScore
import json
import pyttsx3
import threading
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
def game2(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render())

def start(request):
    template = loader.get_template('gamestart.html')
    return HttpResponse(template.render())

def instructions(request):
    template=loader.get_template('instructions.html')
    return HttpResponse(template.render())

from django.shortcuts import render
from .models import PlayerScore

def leaderboard(request):
    scores = PlayerScore.objects.order_by('-score')[:10]  # Top 10 highest scores
    return render(request, 'leaderboard.html', {'scores': scores})



@csrf_exempt
def do_voices(request):
    if request.method == "POST":
        try:
            # Parse JSON data from request body
            data = json.loads(request.body)
            text = data.get("text", "No input text received")

            if not text.strip():
                return JsonResponse({"error": "Empty text received"}, status=400)

            def run_tts():
                engine = pyttsx3.init()
                engine.say(text)
                engine.runAndWait()

            # Run text-to-speech in a separate thread
            tts_thread = threading.Thread(target=run_tts)
            tts_thread.start()

            return JsonResponse({"message": f"Speaking: {text}"})

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON received"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    
    # Return error for any other method (e.g., GET)
    return JsonResponse({"error": "Invalid request method"}, status=405)

import json
from django.http import JsonResponse
from .models import PlayerScore

def submit_score(request):
    if request.method == "POST":
        data = json.loads(request.body)
        PlayerScore.objects.create(
            name=data['name'],
            score=data['score']
        )
       
        return JsonResponse({"success": True})
    return JsonResponse({"success": False}, status=400)
