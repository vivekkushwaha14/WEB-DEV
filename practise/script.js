const quoteDisplay = document.getElementById("quote");
const input = document.getElementById("input");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const restartBtn = document.getElementById("restart");

let quote = "Typing is a skill that improves with practice.";
let timer = 0;
let interval = null;
let started = false;

function startTimer() {
  interval = setInterval(() => {
    timer++;
    timerDisplay.textContent = timer;
    updateWPM();
  }, 1000);
}

function reset() {
  timer = 0;
  timerDisplay.textContent = 0;
  wpmDisplay.textContent = 0;
  accuracyDisplay.textContent = 0;
  input.value = "";
  quoteDisplay.textContent = quote;
  clearInterval(interval);
  started = false;
}

function updateWPM() {
  const wordsTyped = input.value.trim().split(/\s+/).length;
  const minutes = timer / 60;
  const wpm = Math.round(wordsTyped / minutes || 0);
  wpmDisplay.textContent = wpm;
}

function checkAccuracy() {
  const typed = input.value;
  let correct = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === quote[i]) {
      correct++;
    }
  }

  const accuracy = Math.round((correct / quote.length) * 100);
  accuracyDisplay.textContent = accuracy;
}

input.addEventListener("input", () => {
  if (!started) {
    startTimer();
    started = true;
  }

  checkAccuracy();

  if (input.value === quote) {
    clearInterval(interval);
    alert("Test completed!");
  }
});

restartBtn.addEventListener("click", reset);

// Load quote on page load
window.onload = () => {
  quoteDisplay.textContent = quote;
};
