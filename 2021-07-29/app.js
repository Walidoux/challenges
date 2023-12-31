const board = document.getElementById("board");
const cellElements = document.querySelectorAll("[data-cell]");
const resultSection = document.getElementById("resultSection");
const resultTextMessage = document.getElementById("result-text_message");

const X_CLASS = "x";
const CIRCLE_CLASS = "circle";

const WINNING_COMBINATIONS = [
  // Horrizentallement
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Verticallement
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonallement
  [0, 4, 8],
  [2, 4, 6],
];

let circleTurn = false;

function startGame() {
  for (const prop of cellElements) {
    prop.addEventListener("click", handleClick, { once: true });
  }
  setBoardHoverClass();
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

  placeMark(cell, currentClass);

  if (checkWinner(currentClass)) {
    endGame(false);
  } else if (isDraw(true)) {
    endGame(true);
  } else {
    switchTurns();
    setBoardHoverClass();
  }
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function switchTurns() {
  circleTurn = !circleTurn;
}

function checkWinner(currentClass) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

function endGame(draw) {
  if (draw) {
    resultTextMessage.innerText = "C'est une égalité !";
  } else {
    resultTextMessage.innerText = `Victoire pour ${circleTurn ? "o" : "x"}`;
  }
  resultSection.classList.add("active");
}

function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

startGame();
