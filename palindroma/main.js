'use strict';


// Creo una funzione ailatIditaLia per verificare se la parola è palindroma
function aiLatidItalia (parola) {
    let palindroma = ''
    for (let i = parola.length - 1; i >= 0; i--) {
      palindroma += parola[i]
    }
    return palindroma
  }

  const inPut = prompt("Inserisci una parola");

  // condizione per vedere se la parola inserita è palindroma
  if (inPut === aiLatidItalia( inPut)) {
    console.log(aiLatidItalia (inPut));
    alert("sono una palindroma");
  } else {
    alert("non sono una palindroma");
  }

//1. Creo una variabile con prompt per inserire una parola in formato stringa
//console.log(inPut);


//2. Creo una funzione ailatIditaLia per verificare se la parola è palindroma
//let inPut = prompt('Inserisci una parola');
//function aiLatidItalia (inPut) {
 //for (let i = 0; i < inPut.length; i++) {
    //console.log({inPut});
    //return inPut;
 //}
//}

//3. Creo una funzione per invertire la parola

//function ailatIditaLia (inPut) {
 //for( let i = inPut.length-1 ;i >= 0 ;i--) {
    //console.log(putIn);
    //return putIn;
 //}
//}

//aiLatidItalia ('anna');
//ailatIditaLia ('anna');

//4. Creo una funzione per verificare se la parola è palindrome
   //SE gli array ottenuti sono uguali allora la parola è palindroma
      //SE ALTRIMENTI gli array sono diversi allora la parola non è palindroma
//function palindroma( inPut ) {
   //if( putIn === inPut){

      //5. Stampo a console 'sono palindroma' se la parola è palindroma, 'non sono palindroma' se la parola non è palindroma
        //console.log('sono palindroma');
   //} else {
        //console.log('non sono palindroma')
      //}
    //}

//palindroma ('anna');
