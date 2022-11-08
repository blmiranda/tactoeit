let board = ["", "", "", "", "", "", "", "", ""];
let playerTurn = 0;
let symbol = ["o", "x"];
let gameOver = false;
let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let arrayWinner;

function handleMove(position) {
  if (gameOver) {
    return;
  }

  if (board[position] == "") {
    board[position] = symbol[playerTurn];

    arrayWinner = searchWinner();

    if (arrayWinner == false) {
      gameOver = false;
    } else {
      gameOver = true;
    }

    if (playerTurn == 0) {
      playerTurn = 1;
    } else {
      playerTurn = 0;
    }
  }

  return gameOver;
}

function searchWinner() {
  for (let i = 0; i < winStates.length; i++) {
    let winSequence = winStates[i];

    let pos1 = winSequence[0];
    let pos2 = winSequence[1];
    let pos3 = winSequence[2];

    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ""
    ) {
      return winStates[i];
    }
  }

  return [];
}

function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTurn = 0;
  symbol = ["o", "x"];
  gameOver = false;
}
