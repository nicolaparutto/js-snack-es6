/*
- Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
- La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/


const casualArray = ['giallo', 'rosso', 'verde', 'nero', 'blu', 'arancione'];
const numA = 2;
const numB = 5;

const arrayGetted = (casualArray, num1, num2) => casualArray.slice(numA, numB);
console.log(arrayGetted(casualArray));
