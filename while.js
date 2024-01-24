// CICLI
// sono strutture in grado di ripetere un blocco di codice fin tanto che una condizione rimane vera

// CICLO WHILE
// si utilizza in genere per rieseguire un blocco di codice un numero INDEFINITO di volte (quando non so quante volte dovrò fare una cosa fino a raggiungere il risultato)

// while(condizione da verificare) {
//     blocco di codice da eseguire (una o più volte)
// }

// let contatore = 0;

// while (contatore < 3000) {
//   console.log("numero ", contatore);

//   // contatore = contatore + 1
//   // contatore += 1
//   contatore++;
// }

// console.log("Valore finale: ", contatore);

let randNum = 0;
let counter = 0;

// generazione di numero random:

// Math.random() --> valore tra 0 e 0.999999
// Math.random() * 3 --> valore tra 0 e 2.9999999
// Math.floor(Math.random() * 3) --> valori interi tra 0 e 2 (il 3 è escluso)
// Math.ceil(Math.random() * 3) --> valori interi tra 1 e 3 (lo 0 è escluso)

while (randNum < 100) {
  randNum += Math.floor(Math.random() * 10 + 1); // ottengo un numero random da 0 a 10 ---> imposto 11 perché ad 11 non ci arriveremo mai per via dell'arrotondamento per difetto
  console.log("il numero attuale è ", randNum);
  counter++;
}

console.log("ci sono volute " + counter + " iterazioni");

// do...while
// faccio ALMENO una iterazione anche se la condizione non è verificata la prima volta

/*
do {
    codice da eseguire
} while(condizione da verificare a posteriori)
*/
const num = 25;
do {
  console.log("il numero è ", num); // questo lo vedremo una volta prima della verifica della condizione
  num++;
} while (num < 10);
