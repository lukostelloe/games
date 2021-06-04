var card = document.getElementsByClassName("card");
var cardFront = document.getElementsByClassName("front");
var cardBack = document.getElementsByClassName("back");
var replay = document.getElementById("replay");

const alice = document.getElementsByClassName("alice");
const bart = document.getElementsByClassName("bart");
const cat = document.getElementsByClassName("cat");
const dwarf = document.getElementsByClassName("dwarf");
const lady = document.getElementsByClassName("lady");
const lisa = document.getElementsByClassName("lisa");

/*setting up array shuffle*/

let cardArray = [alice, bart, cat, dwarf, lady, lisa];

function shuffleArray(cardArray) {
  for (let i = 0; i < cardArray.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cardArray[i];
    cardArray[i] = cardArray[j];
    cardArray[j] = temp;
  }
}

/*FLIP THE CARDS AROUND*/

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function () {
    console.log("Clicked index: " + i);
    cardFront[i].style.display = "block";
    cardBack[i].style.display = "none";
  });
}

/* MEASURING WHAT CARD WAS CLICKED*/

function aliceCardclick() {
  console.log("alice was clicked"); ///////////1
}

function bartCardclick() {
  console.log("bart was clicked"); ///////////2
}

function catCardclick() {
  console.log("cat was clicked"); ///////////3
}

function dwarfCardclick() {
  console.log("dwarf was clicked"); //////////4
}

function ladyCardclick() {
  console.log("lady was clicked"); ///////////5
}

function lisaCardclick() {
  console.log("lisa was clicked"); //////////6
}

/* TURN THE CARDS BACK OVER AFTER 2 TURNS*/

/* FUNCTION ON REPLAY BUTTON*/
replay.addEventListener("click", function () {
  for (var i = 0; i < card.length; i += 1) {
    cardFront[i].style.display = "none";
    cardBack[i].style.display = "block";
  }
});
