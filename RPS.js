/*this gets the value of the button press*/
let amount;
let arrays = new Array();

function changePlayer() {
  document.getElementById("instructions").innerHTML =
    "Player 2's turn, Player 1 LOOK AWAY";
}

function storeVar(el) {
  var amount = el.getAttribute("value");
  console.log(amount);
  arrays.push(amount);
  console.log(arrays);
  checkWin();
  changePlayer();
}

/*check for winner*/
function checkWin() {
  if (
    (arrays[0] == 1 && arrays[1] == 6) || //CHECK FOR PLAYER 1 WIN
    (arrays[0] == 2 && arrays[1] == 4) ||
    (arrays[0] == 3 && arrays[1] == 5)
  ) {
    var r = confirm("PLAYER 1 WINS! Play again?");
    if (r == true) {
      window.location.reload();
    }
  } else if (
    (arrays[0] == 1 && arrays[1] == 5) || //CHECK FOR PLAYER 2 WIN
    (arrays[0] == 2 && arrays[1] == 6) ||
    (arrays[0] == 3 && arrays[1] == 4)
  ) {
    var r = confirm("PLAYER 2 WINS! Play again?");
    if (r == true) {
      window.location.reload();
    }
  } else if (
    (arrays[0] == 1 && arrays[1] == 4) || //CHECK FOR DRAW
    (arrays[0] == 2 && arrays[1] == 5) ||
    (arrays[0] == 3 && arrays[1] == 6)
  ) {
    var r = confirm("DRAW! Play again?");
    if (r == true) {
      window.location.reload();
    }
  }
}
