# Mystery Nation: An Educational Word Puzzle Game

![Game Screenshot](link-to-screenshot-image)

## Description

Mystery Nation is an interactive and educational game aimed at children aged 8-10, designed to enhance their knowledge of national flags and country names through a word puzzle format, similar to Scrabble. The game presents an incomplete country name where players must guess the missing letters based on a displayed flag and the multiple hints provided. It features multiplayer support, including an AI player, creating an engaging and competitive learning experience. Developed using HTML, CSS, Python (Django), and JavaScript, the game incorporates scoring mechanisms and educational insights. Mystery Nation fosters pattern recognition, spelling accuracy, and cognitive retention skills. The game can be used in classrooms and at-home learning, improving children’s geographical knowledge interactively. Future enhancements may include additional difficulty levels, expanded country databases, and voice-based hints to further assist in learning.

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
   ```

2. **Navigate to the project directory:**

   ```cmd
   cd Mystery-Nation
   ```

3. **Install the required dependencies:**

   `Python, Django,pyttsx3 etc.
   ```

4. **Run the game:**

   ```py manage.py runserver
   ```

## How to Play

1. **Start the game:** Launch the game by running `main.py`.
2. **Receive clues:** The game will present you with a series of hints about a country.
3. **Make a guess:** Based on the clues, input your guess for the country's name.
4. **Feedback:** The game will inform you if your guess is correct or provide additional hints if incorrect.
5. **Continue playing:** Proceed through multiple rounds to test your knowledge across various countries.

*Note: Ensure that you have an active internet connection, as the game may fetch real-time data for some clues.*

## Implementation

### Game Structure
- The game is executed through `main.py`, which serves as the entry point.
- It follows a loop-based gameplay system where players receive hints and attempt to guess a country.
- Correct guesses allow players to proceed, while incorrect guesses prompt additional hints.

### Backend Logic
- The game retrieves data about countries (possibly from an external API or a local database).
- It processes the data to generate a set of hints for each country.
- The program maintains game states such as the number of attempts, rounds, and user input handling.

### User Interaction
- The game uses a command-line interface (CLI) where users input their guesses.
- The system compares the user's input with the correct answer.
- Text-based feedback informs the player if their guess is correct or provides additional hints.

### Dependencies
- The game depends on Python libraries, including:
  - `requests` (if fetching data from an external API)
  - `random` (for selected countries)
  - `JSON` (for handling stored country data)
  - pyttsx3(for voice module implementation (words to speech))
  -Django(Python Framework)
  
### Internet Connectivity
- Since the game may fetch real-time data, an active internet connection could be required.


## Research and Study

### Research Questions
- **RQ1:** How can an interactive word puzzle game enhance children's knowledge of national flags and country names?
- **RQ2:** Does competition (human vs. AI) improve learning outcomes in an educational game?

### Hypothesis
After interacting with the game at least three times, children will show an improved ability to recognize national flags and better spelling accuracy for country names.

### Methodology
- **Learning Activity:** Mystery Nation presents national flags alongside incomplete country names. Players guess missing letters to complete the name.
- **Learning Goals:** Improve geographical awareness, spelling accuracy, and pattern recognition skills.
- **Learning Skills Supported:** Memory retention, cognitive development, and quick decision-making.
- **Pre-Post Test:** Players take a pre-test on flag knowledge before gameplay and a post-test afterward. Improvement is measured by accuracy.
- **Data Collection:** Data logging tracks player performance, accuracy, and engagement.

## Limitations and Future Work

### Limitations
- The current version includes a limited set of flags and countries.
- AI difficulty tuning requires further testing.
- Accessibility features for children with learning disabilities need enhancement.

### Future Work
- Implement voice-based hints.
- Develop adaptive difficulty levels.
- Expand content to cover more countries.
- Enhance accessibility features for children with learning disabilities.

## Acknowledgments
We would like to thank our colleagues for their feedback and contributions during the development of Mystery Nation.

## Directory
Mystery-Nation/<br>
│
├── game2.py               # Entry point for running the game. Contains the main game loop.<br>
├── requirements.txt      # List of Python dependencies required to run the game.<br>
├── README.md             # Documentation file (this one) explaining the game, setup instructions, and implementation details.<br>
│<br>
├── static/               # Directory for static files like CSS, images, and client-side assets.<br>
│   ├── audio/              # CSS files for styling the game interface.<br>
│   └── images/           # Image files such as flags, icons, and other graphics used in the game.<br>
|   |__ others            #other files including logic.js and style.css for the game ligc and styling<br>
│<br>
├── templates/            # Directory for HTML templates (if using Django).<br>
│   ├── index.html        # The main template for displaying the game interface.<br>
│   └── result.html       # Template for showing the final result or feedback after each round.<br>
|   |__ instructions.html # instructions page for the game.<br>
|   |__gamestart.html   # Start page of game.<br>
│

│   ├── init.py           # Contains functions for game logic such as generating clues, verifying guesses, etc.<br>
|   |__admin.py<br>
|   |__apps.py<br>
|   |__models.py<br>
|   |__urls.py              # urls accessed in the game<br>
|   |__ utils.p             # utilitary functions for the game like voice to word conversion<br>
|   |__ views.py            # methods for displaying HTML files through Django and auxiliary actions within Django like saving scores<br>
│---Mystery_Nation/<br>
|   |_pycache_/<br>
|    |--- init.py           # misc <br>

|  |--asgi.py<br>
|  |-- settings.py<br>
│  └── urls.py          # Actual place this apps URLs are saved to django.<br>
|  ├── wsgi.py      # Tests for game mechanics like generating clues, checking guesses.<br>
   ├── db.splite3<br>
    └── manage.py <br>


## References
- Ekasari, M. F., et al. (2025). *Effectiveness of health promotion utilizing word puzzle games.* Healthcare in Low-Resource Settings.
- Kumalasari, R. (2018). *The effect of using the guess-the-word game in learning vocabulary.* Universitas Muhammadiyah Sidoarjo.
- Lauterbach, M., & Zipke, M. (2024). *Wordling with Elementary Students.* The Reading Teacher.
- Lindström, J. (2020). *Fill-in-the-Blank or Write an Original Sentence.* Dissertation.
- Saxena, A., et al. (2009). *Crossword Puzzles: Active Learning.* Archives of Pathology & Laboratory Medicine.
- Yenprem, W. (2022). *A development of a word guessing game to enhance critical thinking.* SALTeL Journal.

