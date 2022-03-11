//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.

const numeri = [11, 45, 34, 77, 3, 6, 9];
sommaNumeriDispari = 0;

for(let i = 0; i < numeri.length; i++){
  if(i % 2 !== 0);
  sommaNumeriDispari += numeri[i];
};

console.log(sommaNumeriDispari);