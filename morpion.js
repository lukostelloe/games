let cells = document.querySelectorAll(".cell");
let instr = document.getElementById("game-status");
let arrays = new Array(9);
let player1 = 1;
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
      instr.innerHTML = "Player 2's turn";
      arrays[j] = 1;
    } else {
      e.target.innerHTML = "O";
      instr.innerHTML = "Player 1's turn";
      arrays[j] = 0;
    }
    switchPlayer();
    console.log(player1);
  };
}
