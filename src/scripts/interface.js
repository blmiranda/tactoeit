document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".squares");
  let onGoing = document.getElementsByTagName("footer")[0];
  let player1stored = localStorage.getItem("player1");

  onGoing.innerHTML = `<h2 id="ongoing" style="color: #44af69">${JSON.parse(
    player1stored
  )}'s turn!</h2>`;

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;
  let body = document.querySelectorAll("body >*");
  let gameSheet = document.querySelectorAll(".gamesheet >*");
  let spaces = document.querySelectorAll(".spaces >*");

  if (handleMove(position)) {
    setTimeout(() => {
      let positionMove1 = document.getElementById(
        JSON.stringify(arrayWinner[0])
      );
      let positionMove2 = document.getElementById(
        JSON.stringify(arrayWinner[1])
      );
      let positionMove3 = document.getElementById(
        JSON.stringify(arrayWinner[2])
      );

      body.forEach((e) => {
        e.style.filter = "blur(10px)";
      });
      gameSheet.forEach((e) => {
        e.style.filter = "blur(10px)";
      });
      spaces.forEach((e) => {
        e.style.filter = "blur(10px)";
      });

      body[2].style.filter = "blur(0px)";
      body[1].style.filter = "blur(0px)";
      gameSheet[4].style.filter = "blur(0px)";
      positionMove1.setAttribute("style", "blur(0px)");
      positionMove2.setAttribute("style", "blur(0px)");
      positionMove3.setAttribute("style", "blur(0px)");
    }, 10);
  }

  updateSquares();
}

function updateSquares() {
  let squares = document.querySelectorAll(".squares");
  let player1stored = JSON.parse(localStorage.getItem("player1"));
  let player2stored = JSON.parse(localStorage.getItem("player2"));

  squares.forEach(function (square) {
    let position = square.id;
    let symbol = board[position];
    let onGoing = document.getElementsByTagName("footer")[0];

    if (symbol != "") {
      if (symbol == "o" && playerTurn == 1) {
        square.innerHTML = `<div class='${symbol}'></div>`;

        if (gameOver == false) {
          onGoing.innerHTML = `<h2 id="ongoing" style="color: #f8333c">${player2stored}'s turn!</h2>`;
        }

        if (gameOver == true) {
          onGoing.innerHTML = `<h2 id="ongoing" style="color: #44af69">${player1stored} wins!</h2>
          <button id="restartbutton"><span></span>restart</button>`;

          let restartButton = document.getElementById("restartbutton");

          restartButton.addEventListener("click", () => {
            let onGoing = document.getElementsByTagName("footer")[0];
            let player1stored = JSON.parse(localStorage.getItem("player1"));
            let body = document.querySelectorAll("body >*");
            let gameSheet = document.querySelectorAll(".gamesheet >*");
            let spaces = document.querySelectorAll(".spaces >*");

            restartGame();

            onGoing.innerHTML = `<h2 id="ongoing" style="color: #44af69">${player1stored}'s turn!</h2>`;

            squares.forEach((square) => {
              square.innerHTML = "";
            });

            body.forEach((e) => {
              e.style.filter = "blur(0px)";
            });
            gameSheet.forEach((e) => {
              e.style.filter = "blur(0px)";
            });
            spaces.forEach((e) => {
              e.style.filter = "blur(0px)";
            });
          });
        }
      }

      if (symbol == "x" && playerTurn == 0) {
        square.innerHTML = `<div class='${symbol}'><div class='line first'></div><div class='line second'></div></div>`;

        if (gameOver == false) {
          onGoing.innerHTML = `<h2 id="ongoing" style="color: #44af69">${player1stored}'s turn!</h2>`;
        }

        if (gameOver == true) {
          onGoing.innerHTML = `<h2 id="ongoing" style="color: #f8333c">${player2stored} wins!</h2>
          <button id="restartbutton"><span></span>restart</button>`;

          let restartButton = document.getElementById("restartbutton");

          restartButton.addEventListener("click", () => {
            let onGoing = document.getElementsByTagName("footer")[0];
            let player1stored = JSON.parse(localStorage.getItem("player1"));
            let body = document.querySelectorAll("body >*");
            let gameSheet = document.querySelectorAll(".gamesheet >*");
            let spaces = document.querySelectorAll(".spaces >*");

            restartGame();

            onGoing.innerHTML = `<h2 id="ongoing" style="color: #44af69">${player1stored}'s turn!</h2>`;

            squares.forEach((square) => {
              square.innerHTML = "";
            });

            body.forEach((e) => {
              e.style.filter = "blur(0px)";
            });
            gameSheet.forEach((e) => {
              e.style.filter = "blur(0px)";
            });
            spaces.forEach((e) => {
              e.style.filter = "blur(0px)";
            });
          });
        }
      }
    }
  });
}
