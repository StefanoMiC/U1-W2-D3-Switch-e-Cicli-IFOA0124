// CICLO FOR
// si utilizza in genere per rieseguire un blocco di codice un numero FINITO di volte
// (è tipicamente utilizzato in combinazione con un'array per attraversarlo fino alla sua fine)

const students = ["Ilaria", "Luljeta", "Manuel", "Marco", "Mia", "Riccardo", "Francesco", "Stefano"];
// di gran lunga il più utilizzato
// ci permette di eseguire un blocco di codice un numero PREDETERMINATO DI VOLTE

// SINTASSI:
// for (definizione contatore; condizione da valutare; incremento contatore) {
//      codice da eseguire a ripetizione
// }

// la variabile i esiste solo all'interno del contesto del for loop
for (let i = 0; i < 100; i++) {
  console.log("siamo dentro al for: ", i);
}

const myArr = [];
for (let i = 0; i < 100; i++) {
  if ((i + 1) % 2 === 0) {
    myArr.push(i + 1);
  }
}

// anche il ciclo FOR è bloccante, ogni istruzione successiva dovrà aspettare il suo completamento
// scrivere console.log qui fuori ci darà la certezza di avere il dato aggiornato e/o modificato dal for loop
console.log(myArr);

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  console.log("student", student);
}

let foundIndex = null;

for (let i = 0; i < students.length; i++) {
  if (students[i] === "Ilaria") {
    foundIndex = i;
  }
}

if (foundIndex !== null || foundIndex !== undefined) {
  console.log("abbiamo trovato ilaria in posizione:", foundIndex);
} else {
  console.log("ilaria non trovata");
}

const charArr = [];
const phrase = "Epicode is an awesome place to be in!";

for (let i = 0; i < phrase.length; i++) {
  if (phrase[i] === " ") {
    continue;
  }

  if (phrase[i] === "w") {
    break;
  }

  charArr.push(phrase[i]);
  console.log(phrase[i]);
}

console.log(charArr.join(""));
