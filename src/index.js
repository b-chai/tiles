import Game from "./scripts/game";

const game = new Game();
document.addEventListener("DOMContentLoaded", () => {
  // hard = 14 medium = 8 easy = 5
  game.createGame(14);
  game.createButtons();
  game.updateScores();
});

const restart = document.querySelector(".restart");
restart.addEventListener("click", () => {
  game.reset();
});

const replay = document.querySelector(".replay");
replay.addEventListener("click", () => {
  const scoreboard = document.querySelector(".show2");

  function toggle() {
    if (scoreboard.className === "show2") {
      scoreboard.className = "hidden2";
    } else {
      scoreboard.className = "show2";
    }
  }
  toggle();
  game.reset();
});

const instruction = document.querySelector(".lock");
instruction.addEventListener("click", () => {
  const hidden = document.querySelector("#instructions");

  function toggle() {
    if (hidden.className === "show") {
      hidden.className = "hidden";
    } else {
      hidden.className = "show";
    }
  }
  toggle();
});

const instruction2 = document.querySelector(".lock2");
instruction2.addEventListener("click", () => {
  const hidden = document.querySelector("#instructions");

  function toggle() {
    if (hidden.className === "show") {
      hidden.className = "hidden";
    } else {
      hidden.className = "show";
    }
  }
  toggle();
});

const instruction3 = document.querySelector(".lock3");
instruction3.addEventListener("click", () => {
  const hidden = document.querySelector("#instructions");

  function toggle() {
    if (hidden.className === "show") {
      hidden.className = "hidden";
    } else {
      hidden.className = "show";
    }
  }
  toggle();
});
