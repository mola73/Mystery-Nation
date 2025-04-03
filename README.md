# Mystery Nation: An Educational Word Puzzle Game

![Game Screenshot](https://drive.google.com/file/d/1hBYS415vWej2zNnQNSIoViNo02KZZ8-y/view?usp=sharing)

## Description

Mystery Nation is an interactive and educational word puzzle game designed for children aged 8-10. It helps enhance knowledge of national flags and country names through a puzzle format, similar to Scrabble. The game presents an incomplete country name, and players must guess the missing letters based on a displayed flag and provided hints. It features multiplayer support, including an AI player, creating an engaging and competitive learning experience.

Developed using HTML, CSS, Python (Django), and JavaScript, Mystery Nation incorporates scoring mechanisms and educational insights. It fosters pattern recognition, spelling accuracy, and cognitive retention skills. The game is ideal for classroom and home learning, improving children's geographical knowledge interactively. Future updates may include additional difficulty levels, expanded country databases, and voice-based hints to further enhance learning.

## Table of Contents

- [Installation](#installation)
- [How to Play](#how-to-play)
- [Implementation](#implementation)
- [Research and Study](#research-and-study)
- [Limitations and Future Work](#limitations-and-future-work)
- [Acknowledgments](#acknowledgments)
- [References](#references)

## Installation

To set up Mystery Nation on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mola73/Mystery-Nation.git
   
2. **Activate or create a virtual environment

3. **Navigate to the project directory**
   cd Mystery-Nation
4. **Run the game**
   py manage.py runserver
## How to Play
Start the game: Launch the game by running main.py.

Receive clues: The game will present you with hints about a country.

Make a guess: Based on the clues, input your guess for the country's name.

Feedback: The game will inform you if your guess is correct or provide additional hints if incorrect.

Continue playing: Play multiple rounds to test your knowledge of different countries.

Note: An active internet connection may be required to fetch real-time data for some clues.

## Implementation
Game Structure
The game is executed through main.py, which serves as the entry point.

It follows a loop-based gameplay system where players receive clues and attempt to guess the country.

Correct guesses allow players to proceed, while incorrect guesses prompt additional hints.

Backend Logic
The game retrieves data about countries, either from an external API or a local database.

It processes the data to generate a set of clues for each country.

The program maintains game states, such as the number of attempts, rounds, and user input handling.

User Interaction
The game uses a command-line interface (CLI), where users input their guesses.

The system compares the user's input with the correct answer and provides feedback accordingly.

Dependencies
The game depends on the following Python libraries:

requests (for fetching data from an external API)

random (for selecting countries)

json (for handling country data)

pyttsx3 (for voice-to-speech functionality)

Django (Python framework for backend)

Internet Connectivity
An active internet connection may be required for real-time data fetching in some game modes.

## Research and Study
Research Questions
RQ1: How can an interactive word puzzle game enhance children's knowledge of national flags and country names?

RQ2: Does competition (human vs. AI) improve learning outcomes in an educational game?

Hypothesis
After playing the game at least three times, children will show improved ability to recognize national flags and increased spelling accuracy for country names.

Methodology
Learning Activity: Mystery Nation presents national flags alongside incomplete country names. Players guess missing letters to complete the names.

Learning Goals: Improve geographical awareness, spelling accuracy, and pattern recognition skills.

Learning Skills Supported: Memory retention, cognitive development, and quick decision-making.

Pre-Post Test: Players take a pre-test on flag knowledge before gameplay and a post-test afterward. Improvement is measured by accuracy.

Data Collection: Performance data is logged to track accuracy and engagement.

## Limitations and Future Work
Limitations
The current version includes a limited set of flags and countries.

AI difficulty requires further testing for better balance.

Accessibility features for children with learning disabilities need to be enhanced.

Future Work
Implement voice-based hints for an interactive experience.

Develop adaptive difficulty levels.

Expand the country database to include more flags.

Improve accessibility features for children with learning disabilities.

## Acknowledgments
We would like to thank our colleagues for their feedback and contributions during the development of Mystery Nation.

Mystery-Nation/<br>
│<br>
├── game2.py               # Main entry point, contains the game loop.<br>
<br>
├── requirements.txt       # List of Python dependencies required to run the game.<br>
<br>
├── README.md              # Documentation file (this one).<br>
<br>
├── static/                # Directory for static files like CSS, images, and client-side assets.<br>
<br>
│   ├── audio/             # Audio files for game sounds.<br>
<br>
│   └── images/            # Image files like flags, icons, and other graphics.<br>
<br>
├── templates/             # Directory for HTML templates (if using Django).<br>
<br>
│   ├── index.html         # Main template for displaying the game interface.<br>
<br>
│   └── result.html        # Template for displaying results after a round.<br>
<br>
│   ├── instructions.html  # Instructions page for the game.<br>
<br>
│   └── gamestart.html     # Start page of the game.<br>
<br>
├── mysterynation/         # Core game logic and Django setup.<br>
<br>
│   ├── __init__.py        # Game logic functions like generating clues and checking guesses.<br>
<br>
│   ├── admin.py           # Admin interface setup.<br>
<br>
│   ├── apps.py            # App configuration.<br>
<br>
│   ├── models.py          # Game models for storing data.<br>
<br>
│   ├── urls.py            # URL routing for Django views.<br>
<br>
│   ├── utils.py           # Utility functions like voice-to-word conversion.<br>
<br>
│   ├── views.py           # Methods for rendering HTML templates and handling actions.<br>
│   ├── requirements.txt   # List of dependencies required to run the project.<br>
<br>
└── manage.py              # Django project management script.<br>


## References
Ekasari, M. F., et al. (2025). Effectiveness of health promotion utilizing word puzzle games. Healthcare in Low-Resource Settings.

Kumalasari, R. (2018). The effect of using the guess-the-word game in learning vocabulary. Universitas Muhammadiyah Sidoarjo.

Lauterbach, M., & Zipke, M. (2024). Wordling with Elementary Students. The Reading Teacher.

Lindström, J. (2020). Fill-in-the-Blank or Write an Original Sentence. Dissertation.

Saxena, A., et al. (2009). Crossword Puzzles: Active Learning. Archives of Pathology & Laboratory Medicine.

Yenprem, W. (2022). A development of a word guessing game to enhance critical thinking. SALTeL Journal.
