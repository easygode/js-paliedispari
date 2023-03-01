'use strict';

//1. Creo una variabile con prompt per inserire una parola in formato stringa
const input = prompt('Inserisci una parola');
console.log(input);


//2. Creo una funzione paliInFrasca per verificare se la parola è palindroma
function paliInFrasca () {
    let i = 0
 for (let i = 0; i < input.length; i++) {
    console.log([i]);
 }
}

paliInFrasca();


//3. Creo un ciclo for per ottenere un array delle lettere della parola da destra a sinistra
//4. Creo un ciclo for inverso per ottenere un array delle lettere della parola da sinistra  a  destra
//5. Creo una funzione che mi permette di comparare i due cicli
   //SE gli array ottenuti sono uguali allora la parola è palindroma
   //SE ALTRIMENTI gli array sono diversi allora la parola non è palindroma
//6. Stampo a console PALINDROMA se la parola è palindroma, NON PALINDROMA se la parola non è palindroma