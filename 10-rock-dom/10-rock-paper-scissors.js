let score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};
/*
        if (!score) {
          score = {
            Wins: 0,
            Losses: 0,
            Ties: 0,
          };
        }
  */

updateScoreElement();

function playGame(playMover) {
  const computerMover = function1();

  result = "";

  if (playMover === "scissors") {
    if (computerMover === "Rock") {
      result = "You lose.";
    } else if (computerMover === "Paper") {
      result = "You win.";
    } else if (computerMover === "Scissors") {
      result = "You Tie.";
    }
  } else if (playMover === "Paper") {
    result = "";
    if (computerMover === "Rock") {
      result = "You win.";
    } else if (computerMover === "Paper") {
      result = "You Tie.";
    } else if (computerMover === "Scissors") {
      result = "You lose.";
    }
  } else {
    result = "";

    if (computerMover === "Rock") {
      result = "You Tie.";
    } else if (computerMover === "Paper") {
      result = "You lose.";
    } else if (computerMover === "Scissors") {
      result = "You win.";
    }
  }
  if (result === "You win.") {
    score.Wins += 1;
  } else if (result === "You lose.") {
    score.Losses += 1;
  } else if (result === "You Tie.") {
    score.Ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="icon/${playMover}-emoji.png" alt="" /> <img src="icon/vs-41934.png" alt="" class ="icon"> 
  <img src="icon/${computerMover}-emoji.png" alt="" /> Computer `;

  //     alert(
  //       `You pick ${playMover}. Computer pick ${computerMover}.  ${result}
  //   Wins: ${score.Wins},Losses: ${score.Losses},Ties: ${score.Ties}`
  //     );
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = ` Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

function function1() {
  const randomNumber = Math.random();

  let computerMover = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMover = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMover = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMover = "Scissors";
  }
  return computerMover;
}
