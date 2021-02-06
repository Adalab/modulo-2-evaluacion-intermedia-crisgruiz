"user strict";
const numberRandom = getRandomNumber();
console.log(numberRandom);
const numberElement = document.querySelector(".js-number");
const btnTryElement = document.querySelector(".js-tryBtn");
const textElement = document.querySelector(".js-message");
const triesElement = document.querySelector(".js-numberTries");
const formElement = document.querySelector(".js-form");

function handleResetBtn(ev) {
  ev.preventDefault();
}
formElement.addEventListener("click", handleResetBtn);

function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

function handleUpdateBtn() {
  handleNumber();
  handleCount();
}

function paragraphClue(clueText) {
  textElement.innerHTML = clueText;
}

function handleNumber() {
  const numberValue = parseInt(numberElement.value);
  if (numberValue === numberRandom) {
    paragraphClue("¡Enhorabuena! ¡¡Has ganado campeona!!");
  } else if (numberValue > 100 || numberValue < 1) {
    paragraphClue("Tienes que introducir un número entre 1 y 100");
  } else if (numberValue < numberRandom) {
    paragraphClue("El número que buscamos es más alto. Vuelve a intentarlo");
  } else if (numberValue > numberRandom) {
    paragraphClue("El número que buscamos es más bajo. Vuelve a intentarlo");
  } else {
    paragraphClue("Tienes que introducir un número");
  }
}

let count = 0;
function handleCount() {
  count++;
  triesElement.innerHTML = count;
}
btnTryElement.addEventListener("click", handleUpdateBtn);
