"use strict";

let score = 20;
const message = document.querySelector(".message");
const scoreNumber = document.querySelector(".score");
let number = document.querySelector(".number");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const body = document.querySelector("body");


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


let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".btn.again").addEventListener('click', function () {});
  
score = 20;
secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".message").textContent = "Start guessing...";
document.querySelector(".score").textContent = score;
document.querySelector(".number").textContent = "?";
document.querySelector(".guess").value = "";

document.querySelector("body").style.backgroundColor = "#222";
document.querySelector(".number").style.width = "15rem"; 


  


// reset implementeation


// / Coding Challenge #1

// Implement a game reset functionality, so that the player can make a new guess! Here is how:

// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the score and secretNumber variables
// 3. Restore the initial conditions of the message, number, score and guess input field
// 4. Also restore the original background color (#222) and number width (15rem)