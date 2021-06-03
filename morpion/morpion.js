let cells = document.querySelectorAll(".cell");
let instr = document.getElementById("game-status");
let arrays = new Array(9);
let player1 = 1;

const playagainButton = document.getElementById("playagain");
// document.getElementById("0").textContent = "T";

// let items = Array.from(cells).map((elem) => {
//   elem.textContent = "";
// });

//option to input name

function startGame() {
  player1 = 1;
}

startGame();

function switchPlayer() {
  if (player1 == 1) {
    player1 = 0;
  } else {
    player1 = 1;
  }
}

console.log(player1);

for (i = 0; i < cells.length; i++) {
  cells[i].onclick = function clickCells(e) {
    j = parseInt(e.target.id);
    if (player1 == 1) {
      e.target.innerHTML = "X";
      e.target.disabled = "true";
      e.target.style.cursor = "not-allowed";
      instr.innerHTML = "Player 2's turn";
      arrays[j] = 1;
    } else {
      e.target.innerHTML = "O";
      e.target.disabled = "true";
      e.target.style.cursor = "not-allowed";
      instr.innerHTML = "Player 1's turn";
      arrays[j] = 0;
    }
    checkWin();
    switchPlayer();
    console.log(player1);
  };
}

function checkWin() {
  if (
    (arrays[0] == 1 && arrays[1] == 1 && arrays[2] == 1) || ///////X HORIZONTAL///////////
    (arrays[3] == 1 && arrays[4] == 1 && arrays[5] == 1) ||
    (arrays[6] == 1 && arrays[7] == 1 && arrays[8] == 1) ||
    (arrays[0] == 1 && arrays[3] == 1 && arrays[6] == 1) || ////////X VERTICAL////////////
    (arrays[1] == 1 && arrays[4] == 1 && arrays[7] == 1) ||
    (arrays[2] == 1 && arrays[5] == 1 && arrays[8] == 1) ||
    (arrays[0] == 1 && arrays[4] == 1 && arrays[8] == 1) || /////////X DIAGONAL/////////////
    (arrays[2] == 1 && arrays[4] == 1 && arrays[6] == 1)
  ) {
    instr.innerHTML = "Player 1 wins! Play again?";
    playagainButton.style.display = "block";
  } else if (
    (arrays[0] == 0 && arrays[1] == 0 && arrays[2] == 0) || ///////X HORIZONTAL///////////
    (arrays[3] == 0 && arrays[4] == 0 && arrays[5] == 0) ||
    (arrays[6] == 0 && arrays[7] == 0 && arrays[8] == 0) ||
    (arrays[0] == 0 && arrays[3] == 0 && arrays[6] == 0) || ////////X VERTICAL////////////
    (arrays[1] == 0 && arrays[4] == 0 && arrays[7] == 0) ||
    (arrays[2] == 0 && arrays[5] == 0 && arrays[8] == 0) ||
    (arrays[0] == 0 && arrays[4] == 0 && arrays[8] == 0) || /////////X DIAGONAL/////////////
    (arrays[2] == 0 && arrays[4] == 0 && arrays[6] == 0)
  ) {
    instr.innerHTML = "Player 2 wins! Play again?";
    playagainButton.style.display = "block";
  }
}

function restart() {
  window.location.reload();
}

playagainButton.addEventListener("click", restart);
