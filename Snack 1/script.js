/*
Creare un array di oggetti:
- Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
- stampare a schermo la bici con peso minore.
*/ 

//array di oggetti:
const racingBikes = [
   {name: 'Atala', weight: 12},
   {name: 'Bianchi', weight: 14},
   {name: 'Specialized', weight: 9},
   {name: 'Scott', weight: 11},
   {name: 'Pinarello', weight: 10},
]

//sistema per verificare qual'è la bici più leggera:
let lighterBike = racingBikes[0];
for (let i = 0; i < racingBikes.length; i++){
   const bike = racingBikes[i];
   if(bike.weight < lighterBike.weight){
      lighterBike = bike;
   }
}

//stampo in pagina la bici più leggera:
const bikeBox = document.getElementById('lighter-bike');
bikeBox.innerText = `La bici più leggera si chiama: ${lighterBike.name}.
Pesa ${lighterBike.weight} kg.`;
