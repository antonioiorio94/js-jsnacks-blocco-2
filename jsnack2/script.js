//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

const numeriInseriti = [];
let sommaNumeri = 0;

//Chiedi un numero per 5 volte
for(let i=0; i < 5; i++){
  let numeroUtente = parseInt(prompt("Inserisci un numero"));
  numeriInseriti.push(numeroUtente);
  sommaNumeri += numeriInseriti[i];
}

console.log(numeriInseriti); 



console.log(sommaNumeri);