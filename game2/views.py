from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from django.http import JsonResponse
import json
import pyttsx3
import threading

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
