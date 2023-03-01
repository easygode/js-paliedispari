'use strict';

//1. Creo una variabile numeroUtente con prompt per inserire un numero da 1 a 5
let numeroUtente = Number(prompt('Inserisci un numero da 1 a 5'));
console.log ({numeroUtente});

//2. Creo una funzione numeroRandom per generare un numero da 1 a 5

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let max = 5;
let numeroRandom = getRandomInt(max);
console.log ({numeroRandom});

//3. Sommo numeroUtente e numeroRandom
let sum = numeroUtente + numeroRandom;
console.log(sum);

//4. Creo una funzione pariDispari per stabilire se la somma è pari o dispari
if (sum % 2 === 0) {
    //5. Stampo a console il risultato pari o dispari
    console.log ('pari');
    alert('la somma dei numeri è pari');
  } else {
    //5. Stampo a console il risultato pari o dispari
    console.log ('dispari');
    alert('la somma dei numeri è dispari');
  }
