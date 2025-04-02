import pyttsx3
import threading

engine = pyttsx3.init()
engine.setProperty('rate', 135)     # setting up new voice rateS
def speak(text):
    def run_tts():
        engine.say(text)
        engine.runAndWait()

    tts_thread = threading.Thread(target=run_tts)
    tts_thread.start()
