const card = document.getElementById("card");

card.addEventListener("click", flipIt);

function flipIt() {
  card.classList.toggle("flipCard");
}
