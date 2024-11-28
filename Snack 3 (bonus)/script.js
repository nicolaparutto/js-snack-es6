/*
- Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
- La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/


const casualArray = ['giallo', 'rosso', 'verde', 'nero', 'blu', 'arancione'];
const num1 = 2;
const num2 = 5;

function filterArray (array, numA, numB){
   const newArray = array.slice(numA, numB);
   return newArray;
}

console.log(filterArray(casualArray, num1, num2))

