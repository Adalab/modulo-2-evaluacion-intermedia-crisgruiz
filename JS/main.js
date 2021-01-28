"user strict";

//Función para generar un número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * 100);
}
const numberRandom = getRandomNumber();
console.log(numberRandom);

//Función para comprobar si es el número correcto.

const numberElement = document.querySelector(".js-number");
const btnTryElement = document.querySelector(".js-tryBtn");
const textElement = document.querySelector(".js-message");
const triesElement = document.querySelector(".js-numberTries");

function handleUpdateBtn() {
  handleNumber();
  handleCount();
}

function handleNumber() {
  const numberValue = parseInt(numberElement.value);
  if (numberValue === numberRandom) {
    textElement.innerHTML = "¡Enhorabuena! ¡¡¡Has ganado campeona!!!";
  } else if (numberValue > 100 || numberValue < 1) {
    textElement.innerHTML = "Tienes que introducir un número entre 1 y 100";
  } else if (numberValue < numberRandom) {
    textElement.innerHTML =
      "El número que buscamos es más alto. Vuelve a intentarlo";
  } else if (numberValue > numberRandom) {
    textElement.innerHTML =
      "El número que buscamos es más bajo. Vuelve a intentarlo";
  } else {
    textElement.innerHTML = "Tienes que introducir un número";
  }
}

let count = 0;
function handleCount() {
  count++;
  triesElement.innerHTML = count;
}

btnTryElement.addEventListener("click", handleUpdateBtn);

const btnResetElement = document.querySelector(".js-btn-reset");

function handleResetBtn() {
  const btnReset = btnResetElement;
  if (numberElement !== "" && triesElement.innerHTML !== "") {
    textElement.innerHTML = textElement;
    triesElement.innerHTML = triesElement;
  }
}
btnResetElement.addEventListener("click", handleResetBtn);
