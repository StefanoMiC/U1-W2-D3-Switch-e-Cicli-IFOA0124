// SWITCH CASE
// è un'alternativa all'if-else quando abbiamo diverse condizioni da valutare insieme

/* switch (valore) {
    case "value1": 
        codice da eseguire...
        break;
    case "value2":
        codice da eseguire...
        break;
   default:
        codice che si eseguirà quando non avremo un match con nessuno degli altri casi
} 
*/

// immaginiamo di dover calcolare quante ore di cardio una persona deve farsi sul tapis roulant

let hoursOfIntenseCardio = 0;
const firstName = "Alessio";

// if (firstName === "Stefano") {
//   hoursOfIntenseCardio = 10;
// } else if (firstName === "Marco") {
//   hoursOfIntenseCardio = 5;
// } else if (firstName === "Riccardo") {
//   hoursOfIntenseCardio = 2.5;
// } else if (firstName === "Alessio") {
//   hoursOfIntenseCardio = 1;
// } else {
//   console.log("ti è andata bene...");
// }

// refactor dell'if in uno switch case
// per refactor s'intende un cambiamento (o miglioria) nel codice senza cambiarne l'output

switch (firstName) {
  case "Stefano":
    hoursOfIntenseCardio = 10;
    break;
  case "Marco":
    hoursOfIntenseCardio = 5;
    break;
  case "Riccardo":
    hoursOfIntenseCardio = 2.5;
    break;
  case "Alessio":
    hoursOfIntenseCardio = 1;
    break;
  default:
    console.log("ti è andata bene...");
}

// if (hoursOfIntenseCardio !== 1) {
//   console.log(firstName + " hai da fare... " + hoursOfIntenseCardio + " ore di cardio");
// } else {
//   console.log(firstName + " hai da fare... " + hoursOfIntenseCardio + " ora di cardio");
// }
console.log(firstName + " hai da fare... " + hoursOfIntenseCardio + (hoursOfIntenseCardio === 1 ? " ora" : " ore") + " di cardio");

const fruit = "Mango";

switch (fruit) {
  case "Apple":
    console.log("una mela al giorno...");
    break;
  case "Banana":
    console.log("molto apprezzata dalle scimmie");
    break;
  case "Mango":
    console.log("frutto tropicale ne abbiamo?");
    break;
  case "Kiwi":
    console.log("peloso ma morbido");
    break;

  default:
    console.log("non mi piace questo " + fruit);
}

// questo switch è particolare perché va alla ricerca di un valore esattamente true,
// farà il match con il risultato della prima espressione che si valuterà a true
switch (true) {
  case hoursOfIntenseCardio === 10:
    console.log("Ciao Stefano, devi farti le tue 10 ore");
  // qui il break non lo metto per poter far scatenare ANCHE il messaggio successivo che è coerente anceh per "Stefano"
  case hoursOfIntenseCardio > 1:
    console.log("comincia a correre che ne hai per più di un'ora..!");
    break;
  default:
    console.log("Ciao Alessio non devi correre per più di un'ora che ti fa male!");
}
