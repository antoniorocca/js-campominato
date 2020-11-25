var sceltaLivello = Number(prompt("Segli la difficoltà tra 0, 1 e 2"));
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max-min) + 1) + min;
}
var numeriPc = [];
var numeriUtente = [];
function inArray(array, number) {
  var i=0;
  while (i < array.length) {
    if (number === array[i]) {
      return true;
    }
    i++;
  }
}
if (sceltaLivello == "0") {
   while (numeriPc.length < 16) {
    number = getRandomNumber(1, 100);
   if (! inArray(numeriPc, number)) {
     numeriPc.push(number);
   }
 }
 console.log(numeriPc, numeriPc.length);
 inArray(numeriPc, number);
 for (var i=0; i< 10; i++) {
  var numeroUtente = Number(prompt("Inserisci un numero tra 1 e 100"));
  if(inArray(numeriPc, numeroUtente)) {
    console.log("Game over!");
    break;
  }
  while (inArray(numeriUtente, numeroUtente)) {
    alert("Hai già usato questo numero! Cambia il numero, premi ok e riprova!")
    numeroUtente = Number(prompt("Inserisci un numero tra 1 e 100"));
  }
  numeriUtente.push(numeroUtente);
 } 
 console.log(numeriUtente);
 console.log("Il tuo punteggio è di: " + numeriUtente.length);
} else if (sceltaLivello == "1") {
  while (numeriPc.length < 16) {
    number = getRandomNumber(1, 80);
   if (! inArray(numeriPc, number)) {
     numeriPc.push(number);
   }
 }
 console.log(numeriPc, numeriPc.length);
 inArray(numeriPc, number);
 for (var i=0; i< 10; i++) {
  var numeroUtente = Number(prompt("Inserisci un numero tra 1 e 80"));
  if(inArray(numeriPc, numeroUtente)) {
    console.log("Game over!");
    break;
  }
  while (inArray(numeriUtente, numeroUtente)) {
    alert("Hai già usato questo numero! Cambia il numero, premi ok e riprova!")
    numeroUtente = Number(prompt("Inserisci un numero tra 1 e 80"));
  }
  numeriUtente.push(numeroUtente);
 } 
 console.log(numeriUtente);
 console.log("Il tuo punteggio è di: " + numeriUtente.length);
} else if (sceltaLivello == "2") {
  while (numeriPc.length < 16) {
    number = getRandomNumber(1, 50);
   if (! inArray(numeriPc, number)) {
     numeriPc.push(number);
   }
 }
 console.log(numeriPc, numeriPc.length);
 inArray(numeriPc, number);
 for (var i=0; i< 10; i++) {
   var numeroUtente = Number(prompt("Inserisci un numero tra 1 e 50"));
   if(inArray(numeriPc, numeroUtente)) {
    console.log("Game over!");
    break;
  }
  while (inArray(numeriUtente, numeroUtente)) {
    alert("Hai già usato questo numero! Cambia il numero, premi ok e riprova!")
     numeroUtente = Number(prompt("Inserisci un numero tra 1 e 50"));
  }
  numeriUtente.push(numeroUtente);
 } 
 console.log(numeriUtente);
 console.log("Il tuo punteggio è di: " + numeriUtente.length);
}
