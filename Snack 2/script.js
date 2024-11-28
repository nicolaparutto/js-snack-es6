/*
Creare un array di oggetti di squadre di calcio.
- Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
- Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
- Generare numeri random al posto degli 0 nelle proprietà “punti fatti" e “falli subiti”.
- Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//creo l'array di oggetti:
const footballTeam = [
   {
      name: 'Real Madrid', 
      points: 0, 
      fouls: 0
   },
   {
      name: 'Barcellona',
      points: 0, 
      fouls: 0
   },
   {
      name: 'Manchester United', 
      points: 0, 
      fouls: 0
   },
   {
      name: 'Bayern Monaco', 
      points: 0, 
      fouls: 0
   },
   {
      name: 'Paris Saint-Germain', 
      points: 0, 
      fouls: 0
   },
   {
      name: 'Juventus', 
      points: 0, 
      fouls: 0
   },
   {
      name: 'Chelsea', 
      points: 0, 
      fouls: 0
   },
   {
      name: 'Inter', 
      points: 0, 
      fouls: 0
   },
   {
      name: 'Liverpool', 
      points: 0, 
      fouls: 0
   },
   {
      name: 'Milan', 
      points: 0, 
      fouls: 0
   },
   {
      name: 'Udinese', 
      points: 0, 
      fouls: 0
   },
];

//creo una funzione che genera un numero random:
function randomNumber (max, min){
   return Math.floor(Math.random() * (max - min + 1) + min);
};

//assegno i numeri casuali ai valori, delle proprietà, degli oggetti dell'array:
for (let squad of footballTeam){
   squad.points = randomNumber(1,10);
   squad.fouls = randomNumber(1,10);
}

//seleziono solo le proprietà richieste e le salvo in un array:
const arrayNamesFouls = [];

for(let squad of footballTeam){
   const squadNamesFouls = {
      name: squad.name,
      fouls: squad.fouls
   }
   arrayNamesFouls.push(squadNamesFouls)
};

//stampo in console:
console.log(arrayNamesFouls);


