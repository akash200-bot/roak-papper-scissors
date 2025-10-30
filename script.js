const resultshow = document.querySelector(".game");
const optionshow = document.querySelector(".btn");

const computerChoice = document.getElementById("Computer-choice");
const UserChoice = document.getElementById("user-choice");
const result = document.querySelector("#result");

const button = document.querySelectorAll("button");
const butnarr = Array.from(button);

const scoreBar = document.querySelector(".score");
const resultHeading = document.querySelector("#result-heading");

const restart = document.createElement("div");
restart.innerText = "PLAY AGAIN";
restart.classList.add("restart");

function newGame(){
  resultshow.classList.add("hidden");
  optionshow.classList.remove("hidden");
  result.innerText = "Result";
  
  computerChoice.innerText = ' ' ;
  resultHeading.nextElementSibling.remove()

}

restart.addEventListener("click", newGame);

let score = 0;
function scoreMg() {
  
  if (result.innerText === "You Win!") {
    score += 1;
    scoreBar.innerText = score;
  } else if (result.innerText === "You Lose!") {
    score -= 1;
    scoreBar.innerText = score;
  }
}

button.forEach((e) => {
  e.addEventListener("click", () => {
    resultshow.classList.remove("hidden");
    optionshow.classList.add("hidden");
    UserChoice.innerText = e.innerText;

    setTimeout(computerChoiceDisplay, 1000);
    //this function for computer output
    // computerChoice.innerText = butnarr[parseInt(Math.random() * butnarr.length)].innerText  // this is a single line code to get random computer output
    setTimeout(finalResult, 1500);
    setTimeout(scoreMg, 2000);
  });
});

function finalResult() {
  if (UserChoice.innerText == computerChoice.innerText) {
    result.innerText = "It a Draw!";
  } else if (
    UserChoice.innerText == "Rock" &&
    computerChoice.innerText == "Scissor"
  ) {
    result.innerText = "You Win!";
  } else if (
    UserChoice.innerText == "Scissor" &&
    computerChoice.innerText == "Rock"
  ) {
    result.innerText = "You Lose!";
  } else if (
    UserChoice.innerText == "Scissor" &&
    computerChoice.innerText == "Papper"
  ) {
    result.innerText = "You Win!";
  } else if (
    UserChoice.innerText == "Papper" &&
    computerChoice.innerText == "Scissor"
  ) {
    result.innerText = "You Lose!";
  } else if (
    UserChoice.innerText == "Papper" &&
    computerChoice.innerText == "Rock"
  ) {
    result.innerText = "You Win!";
  } else if (
    UserChoice.innerText == "Rock" &&
    computerChoice.innerText == "Papper"
  ) {
    result.innerText = "You Lose!";
  }
  resultHeading.after(restart);
}

function computerChoiceDisplay() {
  let randomnumber = Math.floor(Math.random() * 3 + 1);

  if (randomnumber == "1") {
    computerChoice.innerText = "Rock";
  } else if (randomnumber == "2") {
    computerChoice.innerText = "Scissor";
  } else if (randomnumber == "3") {
    computerChoice.innerText = "Papper";
  }
}

