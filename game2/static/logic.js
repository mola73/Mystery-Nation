// Retrieve player names from local storage
const player1Name = localStorage.getItem("player1") || "Player 1";
const player2Name = localStorage.getItem("player2") || "Player 2";

const countryInfo = {
  Antarctica: {
    continent: "Continent - It’s a continent itself",
    funFact:
      "The lowest natural temperature ever recorded on Earth was -128.6°F (-89.2°C) at Vostok Station in 1983.",
  },
  Australia: {
    continent: "Continent - It’s a continent itself",
    funFact:
      "The Great Barrier Reef is the largest living structure on Earth and can be seen from space.",
  },
  "United States": {
    continent: "Continent - North America",
    funFact: "Grand Canyon is located in this country.",
  },
  Japan: {
    continent: "Continent - Asia",
    funFact:
      "This country has more than 5.5 million vending machines, selling everything from drinks to fresh eggs and even umbrellas.",
  },
  India: {
    continent: "Continent - Asia",
    funFact:
      "Aryabhata, the mathematician who invented 0, came from this country.",
  },
  Argentina: {
    continent: "Continent - South America",
    funFact:
      "Birthplace of the tango, a dance that started in the streets of Buenos Aires in the late 19th century.",
  },
  Russia: {
    continent: "Continent - Europe & Asia",
    funFact:
      "Largest country in the world, covering 11 time zones and more than 17 million square kilometres.",
  },
  Kazakhstan: {
    continent: "Continent - Asia",
    funFact:
      "The first human spaceflight by Yuri Gagarin in 1961 launched from the Baikonur Cosmodrome.",
  },
  Norway: {
    continent: "Continent - Europe",
    funFact:
      "It has the world’s longest road tunnel, the Lærdal Tunnel, which stretches 24.5 kilometres (15.2 miles).",
  },
  Germany: {
    continent: "Continent - Europe",
    funFact:
      "This country is home to the Autobahn, a highway system with sections that have no official speed limit.",
  },
  Mongolia: {
    continent: "Continent - Asia",
    funFact:
      "Least densely populated country in the world, with about 2 people per square kilometre.",
  },
  Iceland: {
    continent: "Continent - Europe",
    funFact:
      "Runs on almost 100% renewable energy, using hydro and geothermal power.",
  },
  Portugal: {
    continent: "Continent - Europe",
    funFact: "Cristiano Ronaldo was born in this country.",
  },
  Canada: {
    continent: "Continent - North America",
    funFact:
      "Longest coastline in the world, stretching over 202,080 kilometres and 4th largest country in the world. Maybe you are in this country right now.",
  },
  Guatemala: {
    continent: "Continent - North America",
    funFact: "The first chocolate bar was made by the ancient Mayans.",
  },
  Switzerland: {
    continent: "Continent - Europe",
    funFact: "Lindt chocolate is a famous chocolate brand from this country.",
  },
  Tanzania: {
    continent: "Continent - Africa",
    funFact:
      "Mount Kilimanjaro (5,895m), the highest peak of the African continent, is located in this country.",
  },
  Kyrgyzstan: {
    continent: "Continent - Asia",
    funFact:
      "The majestic snow leopard is the national animal of this country.",
  },
  Mexico: {
    continent: "Continent - North America",
    funFact:
      "This country's cuisine is on the UNESCO list of Immaterial World Cultural Heritage.",
  },
  Philippines: {
    continent: "Continent - Asia",
    funFact:
      "This country is an archipelago, meaning it's a group of islands, and it has over 7,640 of them.",
  },
};

let answers = [
  "United States",
  "Japan",
  "India",
  "Argentina",
  "Russia",
  "Kazakhstan",
  "Norway",
  "Germany",
  "Mongolia",
  "Iceland",
  "Portugal",
  "Canada",
  "Guatemala",
  "Antarctica",
  "Australia",
  "Switzerland",
  "Tanzania",
  "Kyrgyzstan",
  "Mexico",
  "Philippines",
];
answers = answers.sort(() => Math.random() - 0.5); // Shuffle countries
const words = answers.map((word) =>
  word.replace(/[a-zA-Z]/g, (char, index) => (index % 3 === 0 ? "_" : char))
);
let currentRound = 0;
let maxRounds = 9;
let scores = [0, 0, 0];
let currentWord = "";

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let activeElement = document.activeElement;
    if (activeElement.tagName === "INPUT") {
      checkAnswer();
    }
  }
});

function startRound() {
  // Update the scoreboard with player names at the start of each round
  const player1Name = localStorage.getItem("player1") || "Player 1";
  const player2Name = localStorage.getItem("player2") || "Player 2";
  document.getElementById(
    "score"
  ).innerText = `${player1Name}: ${scores[0]} | ${player2Name}: ${scores[1]} | Computer: ${scores[2]}`;

  if (currentRound >= maxRounds) {
    //this should end the game
    document.getElementById("turn-info").innerText = "Game Over! Final Scores.";
    onWin(); //this should play a congrats sound
    document.getElementById("submit-btn").disabled = true;
    return;
  }
  document.getElementById("message").innerText = "";
  displayWord();
  console.log("word dispalyed");
}

function displayWord() {
  currentWord = words[currentRound].split("");
  let wordDisplay = document.getElementById("word-display");
  wordDisplay.innerHTML = "";

  currentWord.forEach((char, i) => {
    if (char === " ") {
      wordDisplay.appendChild(document.createTextNode(" ")); // Keep spaces normal
      return;
    }

    let span = document.createElement("span");
    span.classList.add("letter-box"); // Ensures all letters are boxed

    if (char === "_") {
      let input = document.createElement("input");
      input.type = "text";
      input.maxLength = 1;
      input.dataset.index = i;
      input.addEventListener("input", handleInput);
      span.appendChild(input);
    } else {
      span.innerText = char.toUpperCase(); // Ensures uppercase letters in boxes
      span.classList.add("bold-black"); // Makes pre-filled letters bold and black
    }

    wordDisplay.appendChild(span);
  });
  console.log(answers[currentRound]); //debug check
  loadFlag(answers[currentRound]);

  const turnText =
    currentRound % 3 === 0
      ? player1Name
      : currentRound % 3 === 1
      ? player2Name
      : "Computer";
  document.getElementById("turn-info").innerText = `Turn: ${turnText}`;

  if (currentRound % 3 !== 2) {
    document.querySelector("input")?.focus();
  } else {
    setTimeout(computerMove, 2000);
  }
}

function handleInput(event) {
  let input = event.target;
  input.value = input.value.toUpperCase().replace(/[^A-Z]/g, ""); // Only allows letters

  if (input.value.length === 1) {
    let nextBox = input.parentElement.nextElementSibling; // Start with the next sibling

    // Loop until we find the next blank input (skip spaces)
    while (nextBox && !nextBox.querySelector("input")) {
      nextBox = nextBox.nextElementSibling;
    }

    if (nextBox && nextBox.querySelector("input")) {
      nextBox.querySelector("input").focus(); // Move cursor to the next blank
    }
  }
}

function checkAnswer() {
  // Add glow effect
  const submitButton = document.getElementById("submit-btn");
  submitButton.classList.add("glow");

  // Your existing code for checking the answer
  let inputs = document.querySelectorAll("input");
  let userAnswer = words[currentRound];
  let inputValues = Array.from(inputs).map((input) =>
    input.value.toUpperCase()
  );
  let filledAnswer = "";
  let inputIndex = 0;

  // Check for empty inputs
  if (inputValues.includes("")) {
    document.getElementById("message").innerText =
      "Please fill in all blanks to move forward.";
    return; // Exit the function if there are empty inputs
  }

  // Construct the filled answer
  for (let char of userAnswer) {
    if (char === "_") {
      filledAnswer += inputValues[inputIndex] || "_";
      inputIndex++;
    } else {
      filledAnswer += char;
    }
  }

  // Check if the filled answer matches the correct answer
  if (filledAnswer.toUpperCase() === answers[currentRound].toUpperCase()) {
    scores[currentRound % 3]++;
    document.getElementById("message").innerText = "Correct!";
  } else {
    document.getElementById(
      "message"
    ).innerText = `Wrong country, but the country is ${answers[currentRound]}`;
  }
  updateScore();
  setTimeout(nextRound, 2000);
  let imageFormats = ["jpg", "jpeg", "png", "webp"];
  // Remove glow effect after a short delay
  setTimeout(() => {
    submitButton.classList.remove("glow");
  }, 300); // Adjust the duration as needed
}

function computerMove() {
  const correctAnswer = answers[currentRound].toUpperCase().split("");
  let wordDisplay = document.getElementById("word-display");

  wordDisplay.innerHTML = ""; // Clear previous display

  correctAnswer.forEach((char) => {
    let span = document.createElement("span");
    span.classList.add("letter-box");
    span.innerText = char; // Auto-fill the correct letter
    span.classList.add("bold-black"); // Style as pre-filled
    wordDisplay.appendChild(span);
  });

  document.getElementById(
    "message"
  ).innerText = `Computer guessed: ${answers[currentRound]}`;
  scores[2]++;
  updateScore();
  setTimeout(nextRound, 3500);
}

function updateScore() {
  const player1Name = localStorage.getItem("player1") || "Player 1";
  const player2Name = localStorage.getItem("player2") || "Player 2";
  document.getElementById(
    "score"
  ).innerText = `${player1Name}: ${scores[0]} | ${player2Name}: ${scores[1]} | Computer: ${scores[2]}`;
}

function nextRound() {
  currentRound++;
  startRound();
}
function loadFlag(country) {
  let flagElement = document.getElementById("flag");

  let imgPath = `/static/countries/${country}.jpg`; // Use absolute static URL

  let img = new Image();
  img.src = imgPath;

  img.onload = function () {
    flagElement.src = imgPath;
    console.log(`Loaded flag: ${imgPath}`);
  };

  img.onerror = function () {
    console.log(`Failed to load: ${imgPath}, using default flag.`);
    flagElement.src = "/static/countries/Japan.jpg"; // Default fallback
  };
}

// function loadFlag(country) {
//   let imageFormats = ["jpg", "jpeg", "png", "webp"];
//   let folderPath =
//     "C:/Users/muham/OneDrive/Desktop/UNBC work/2025 Winter Semester/(499)Social Robotics/Mystery_Nation/game2/static/countries/";
//   let flagElement = document.getElementById("flag");
//   let foundImage = false;

//   for (let format of imageFormats) {
//     let imgPath = `${folderPath}${country}.${format}`;
//     let img = new Image();
//     img.src = imgPath;

//     img.onload = function () {
//       if (!foundImage) {
//         flagElement.src = imgPath;
//         foundImage = true;
//       }
//     };

//     img.onerror = function () {
//       console.log(`Failed to load: ${imgPath}`);
//     };
//   }

//   setTimeout(() => {
//     if (!foundImage) {
//       flagElement.src = "static/countries/Japan.jpg";
//       console.log("Default flag (Japan) displayed due to missing flag.");
//     }
//   }, 2000);
// }

document.getElementById("micBtn").addEventListener("click", function () {
  console.log("mic vutton has been pressed");
  if (
    !("webkitSpeechRecognition" in window) &&
    !("SpeechRecognition" in window)
  ) {
    alert("Speech recognition not supported in this browser.");
    return;
  }
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();
  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript.toUpperCase();
    let inputFields = document.querySelectorAll("input");
    if (inputFields.length > 0) {
      let letters = transcript.split("");
      inputFields.forEach((input, index) => {
        if (letters[index]) {
          input.value = letters[index];
        }
      });
    }
  };
});

// this controls the pooping out of the funfacts
document.getElementById("flag").addEventListener("mouseover", function () {
  console.log("The mouse is over the flag, fun facts should display");

  const country = answers[currentRound]; // Get current country
  const infoBox = document.getElementById("country-info");

  if (countryInfo[country]) {
    infoBox.innerHTML = `<strong>${countryInfo[country].continent}</strong><br>${countryInfo[country].funFact}`;
    infoBox.style.display = "block";

    // Position the info box near the flag
    infoBox.style.position = "absolute";
    infoBox.style.top = `${this.offsetTop + this.height}px`; // Adjust position below flag
    infoBox.style.left = `${this.offsetLeft}px`;
  } else {
    console.log(`No info available for: ${country}`);
  }
});

document.getElementById("flag").addEventListener("mouseout", function () {
  document.getElementById("country-info").style.display = "none";
});

// document.getElementById("flag").addEventListener("mouseover", function () {
//   console.log("The mouse is over the flg and fun facts should display");
//   const country = answers[currentRound];
//   const infoBox = document.getElementById("country-info");

//   if (countryInfo[country]) {
//     infoBox.innerHTML = `<strong>${countryInfo[country].continent}</strong><br>${countryInfo[country].funFact}`;
//     infoBox.style.display = "block";
//   } else {
//     console.log(`No info available for: ${country}`);
//   }
// });

// document.getElementById("flag").addEventListener("mouseout", function () {
//   document.getElementById("country-info").style.display = "none";
// });
//this is where the funfct portion stops

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submitBtn").addEventListener("click", handleSubmit);
  document.getElementById("quitBtn").addEventListener("click", handleQuit);
});

function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission
  const player1 = document.getElementById("player1").value.trim();
  const player2 = document.getElementById("player2").value.trim();

  // Store player names in local storage (even if they are empty)
  localStorage.setItem("player1", player1);
  localStorage.setItem("player2", player2);
}

function handleQuit() {
  // Redirect to a quit or home page, or close the game window if desired
  window.location.href = "/start/"; // Redirecting to home page or another destination
}

function playAudio(audio) {
  if (audio) {
    audio.currentTime = 0; // Reset audio to start if played before
    audio.play().catch((error) => console.log("Audio playback error:", error));
  }
}

function onWin() {
  playAudio(document.getElementById("congrats"));
}
function ringBell() {
  playAudio(document.getElementById("bell"));
}
function clickButton() {
  playAudio(document.getElementById("click"));
}

//This part is meant for the speach module
function sendVoiceCommand(text) {
  fetch("/do_voices/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: text }), // Send JSON data correctly
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Voice Response:", data.message || data.error);
    })
    .catch((error) => {
      console.error("Error with the voice command request:", error);
    });
}

startRound();
