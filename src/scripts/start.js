let player1 = "";
let player2 = "";
let p1input = document.getElementById("p1input");
let p2input = document.getElementById("p2input");
let startButton = document.getElementById("startbutton");

document.addEventListener("DOMContentLoaded", function storePlayer() {
  startButton.addEventListener("click", function storePlayer() {
    if (p1input.value == "") {
      player1 = "Player 1";
      localStorage.setItem("player1", JSON.stringify(player1));
    } else {
      localStorage.setItem("player1", JSON.stringify(p1input.value));
    }

    if (p2input.value == "") {
      player2 = "Player 2";
      localStorage.setItem("player2", JSON.stringify(player2));
    } else {
      localStorage.setItem("player2", JSON.stringify(p2input.value));
    }
  });
});
