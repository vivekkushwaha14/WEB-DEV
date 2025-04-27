import speech_recognition as sr
import pyttsx3
import datetime
import webbrowser
import os
import random
import json
import openai

# File to store user information
USER_DATA_FILE = "user_data.json"

# OpenAI API Key (Replace with your actual key)
OPENAI_API_KEY = "your-api-key-here"
openai.api_key = OPENAI_API_KEY

def load_user_data():
    try:
        with open(USER_DATA_FILE, "r") as file:
            return json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}

def save_user_data(data):
    with open(USER_DATA_FILE, "w") as file:
        json.dump(data, file, indent=4)

def speak(text):
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()

def listen():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
    
    try:
        command = recognizer.recognize_google(audio).lower()
        print("You said:", command)
        return command
    except sr.UnknownValueError:
        speak("Sorry, I didn't understand that.")
        return ""
    except sr.RequestError:
        speak("Could not request results, please check your internet connection.")
        return ""

def chat_with_gpt(prompt):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )
        return response["choices"][0]["message"]["content"].strip()
    except Exception as e:
        return "Sorry, I couldn't process that request."

def ai_assistant():
    user_data = load_user_data()
    speak("Hello! I am your AI assistant. How can I help you today?")
    while True:
        command = listen()
        
        if "your name" in command:
            speak("I am your AI assistant, powered by GPT.")
        elif "time" in command:
            time_now = datetime.datetime.now().strftime("%I:%M %p")
            speak(f"The time is {time_now}")
        elif "open youtube" in command:
            speak("Opening YouTube")
            webbrowser.open("https://www.youtube.com")
        elif "open google" in command:
            speak("Opening Google")
            webbrowser.open("https://www.google.com")
        elif "play music" in command:
            music_folder = "C:\\Users\\Public\\Music\\Sample Music"  # Change to your music directory
            songs = os.listdir(music_folder)
            if songs:
                song = random.choice(songs)
                os.system(os.path.join(music_folder, song))
                speak(f"Playing {song}")
            else:
                speak("No music found in the folder.")
        elif "weather" in command:
            speak("I can't fetch live weather updates yet, but you can check online.")
        elif "remember" in command:
            info = command.replace("remember", "").strip()
            speak(f"Okay, I will remember that {info}.")
            user_data["memory"] = user_data.get("memory", []) + [info]
            save_user_data(user_data)
        elif "what do you remember" in command:
            memories = user_data.get("memory", [])
            if memories:
                speak("I remember the following things:")
                for memory in memories:
                    speak(memory)
            else:
                speak("I don't remember anything yet.")
        elif "who created you" in command:
            speak("I was created by you, my developer.")
        elif "exit" in command or "bye" in command:
            speak("Goodbye! Have a great day!")
            break
        else:
            response = chat_with_gpt(command)
            speak(response)

if __name__ == "__main__":
    ai_assistant()
