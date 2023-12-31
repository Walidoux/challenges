import { useState } from "react";
import Square from "./Square";

export default function Board() {
  // const [board, setBoard] = useState(Array(9).fill(null));
  const [circleTurn, setCircleTurn] = useState(false);

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

  function startGame() {
    setBoardHoverClass();
    for (const cell of cellElements) {
      cell.addEventListener("click", handleClick, { once: true });
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

  function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (circleTurn) return board.classList.add(CIRCLE_CLASS);
    if (!circleTurn) return board.classList.add(X_CLASS);
  }

  function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
  }

  function switchTurns() {
    setCircleTurn(!circleTurn);
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
        cell.classList.contains(X_CLASS) ||
        cell.classList.contains(CIRCLE_CLASS)
      );
    });
  }

  startGame();

  return (
    <>
      <section class="board" id="board">
        <Square onClick={() => console.log("dummy log debug")}></Square>
        <Square onClick={() => console.log("dummy log debug")}></Square>
        <Square onClick={() => console.log("dummy log debug")}></Square>
        <Square onClick={() => console.log("dummy log debug")}></Square>
        <Square onClick={() => console.log("dummy log debug")}></Square>
        <Square onClick={() => console.log("dummy log debug")}></Square>
        <Square onClick={() => console.log("dummy log debug")}></Square>
        <Square onClick={() => console.log("dummy log debug")}></Square>
        <Square onClick={() => console.log("dummy log debug")}></Square>
      </section>
      <section class="results_section" id="resultSection">
        <h1 class="result-text_message" id="result-text_message"></h1>
        <button class="restart_button">Rejouer</button>
      </section>
    </>
  );
}
