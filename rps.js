//selectors
const startBtn = document.querySelector("#start-btn");
const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page");
const allBtns = document.querySelectorAll(".btn");
const divs = document.querySelectorAll(".img-div");
let userPoints = document.querySelector(".h-userScore");
let compPoints = document.querySelector(".h-compScore");
let winLose = document.querySelector(".win-lose");
let userScore = 0;
let compScore = 0;

//events
startBtn.addEventListener("click", openGame);
allBtns.forEach((button) => button.addEventListener("click", game));

//functions
function openGame() {
  firstPage.classList.add("hide");
  secondPage.classList.add("show");
}

//Generating User & Computer Scores

function game(e) {
  //Computer Choice
  const selections = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  const compResult = selections[random];
  //User Choice
  const userResult = e.target.id;

  //Comp. & User Choice

  const winner = theWinner(userResult, compResult);

  //styling
}

//Audio SFX
win = () => {
  const winSfx = document.getElementById("win");
  winSfx.play();
};

lose = () => {
  const loseSfx = document.getElementById("lose");
  loseSfx.play();
};

//Game Statemnets

theWinner = (user, computer) => {
  if (user === computer) {
    winLose.innerHTML = `Comp. Chose ${computer}, <span style = 'color : yellow'>it's draw!</span>`;
  } else if (user === "rock") {
    if (computer === "paper") {
      winLose.innerHTML = `Comp. Chose ${computer}, <span style = 'color : red'>You Lose!<span>`;
      increaseCompScore();
      lose();
    } else {
      winLose.innerHTML = `Comp. Chose ${computer}, <span style ='color : green'>You Win!</span>`;
      increaseUserScore();
      win();
    }
  } else if (user === "paper") {
    if (computer === "scissors") {
      winLose.innerHTML = `Comp. Chose ${computer}, <span style = 'color : red'>You Lose!<span>`;
      increaseCompScore();
      lose();
    } else {
      winLose.innerHTML = `Comp. Chose ${computer}, <span style ='color : green'>You Win!</span>`;
      increaseUserScore();
      win();
    }
  } else if (user === "scissors") {
    if (computer === "rock") {
      winLose.innerHTML = `Comp. Chose ${computer}, <span style = 'color : red'>You Lose!<span>`;
      increaseCompScore();
      lose();
    } else {
      winLose.innerHTML = `Comp. Chose ${computer}, <span style ='color : green'>You Win!</span>`;
      increaseUserScore();
      win();
    }
  }
};
//Increasing User Score
increaseUserScore = () => {
  userScore++;
  userPoints.innerHTML = userScore;
};

//Increasing Computer Score
increaseCompScore = () => {
  compScore++;
  compPoints.innerHTML = compScore;
};
