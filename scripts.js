"use strict";

let score = 20;
const again = document.querySelector(".again");
const message = document.querySelector(".message");
const scoreNumber = document.querySelector(".score");
let number = document.querySelector(".number");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const body = document.querySelector("body");
let highScoreNumber = document.querySelector(".highscore");
let highScore = 0;

number.textContent = secretNumber;

// attache event listers
check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(typeof guess);

  // message.textContent = '👌Correct Number!'
  if (!guess) {
    message.textContent = "❌ No Number!";
  } else if (guess === secretNumber) {
    message.textContent = "👌Correct Number!";
    number.textContent = secretNumber;
    number.style.width = "30rem";
    body.style.backgroundColor = "#60b347";

    if (score > highScore) {
      highScore = score;
      highScoreNumber.textContent = highScore;
    }
  } else if (guess > secretNumber) {
    message.textContent = "📈 Too High!";
    score--;
    scoreNumber.textContent = score;
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too Low!";
    score--;
    scoreNumber.textContent = score;
  }
});

// DRY => DO NOT REPEAT YOURSELF

again.addEventListener("click", function () {
  score = 20;
  let guess = document.querySelector(".guess");
  guess.value = "";
  message.textContent = "Start guessing...";
  scoreNumber.textContent = score;
  number.textContent = "?";
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
});

