//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.


const primoElenco = [1, 4, 8, 9, 5];
const secondoElenco = [20, 2];
randomNum = Math.floor(Math.random() * 10);

while (secondoElenco.length < primoElenco.length){
  secondoElenco.push(randomNum);
};



console.log(primoElenco);
console.log(secondoElenco);