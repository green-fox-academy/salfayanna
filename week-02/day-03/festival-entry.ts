'use strict';
export { };

const watchlist: string[] = [];
let securityAlcoholLoot: any = 0;
let canGoIn: string[] = [];

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

function securityCheck(array: any[]) {
  for (let i: number = 0; i < array.length; i++) {
    if (array[i].guns > 0) {
      securityAlcoholLoot += array[i].alcohol;
      array[i].alcohol = 0;
      array[i].guns = 0;
      watchlist.push(array[i].name)
    } else if (array[i].alcohol > 0 && array[i].guns === 0) {
      securityAlcoholLoot += array[i].alcohol;
      array[i].alcohol = 0;
      canGoIn.push(array[i].name);
    } else if (array[i].alcohol === 0 && array[i].guns === 0) {
      canGoIn.push(array[i].name);
    }
  }

  console.log(`
  Can go in: ${canGoIn} 
  Security alcohol loot: ${securityAlcoholLoot} 
  Watchlist: ${watchlist}`
  );
}

securityCheck(queue);

export = securityCheck;