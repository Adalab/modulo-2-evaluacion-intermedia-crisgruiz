"user strict";

//Función para generar un número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random()*100);
}
const numberRandom = getRandomNumber();
console.log(numberRandom);

//Función para comprobar si es el número correcto.

const NumberElement = document.querySelector('.js-number')
const btnTryElement = document.querySelector('.js-tryBtn')
const TextElement = document.querySelector('.js-message')


function handleNumber(){
    const numberValue = parseInt(NumberElement.value);
    if (numberValue === numberRandom){
        TextElement.innerHTML = '¡Enhorabuena! ¡¡¡Has ganado campeona!!!'
    }
    else if (numberValue>100){
        TextElement.innerHTML = 'Tienes que introducir un número entre 1 y 100'
    }
    else if (numberValue<1){
        TextElement.innerHTML = 'Tienes que introducir un número entre 1 y 100'
    }
    else if (numberValue < numberRandom){
    TextElement.innerHTML = 'El número que buscamos es más alto. Vuelve a intentarlo'
}
    else if (numberValue > numberRandom){
    TextElement.innerHTML = 'El número que buscamos es más bajo. Vuelve a intentarlo'
}
else{
    TextElement.innerHTML = 'Tienes que introducir un número'
}
};

btnTryElement.addEventListener('click', handleNumber);