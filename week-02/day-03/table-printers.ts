'use strict';
export { };

const ingredients: any[] = [
  { name: 'vodka', inStock: 1, needsCooling: true },
  { name: 'coffee_liqueur', inStock: 0, needsCooling: true },
  { name: 'fresh_cream', inStock: 1, needsCooling: true },
  { name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
  { name: 'mint_leaves', inStock: 0, needsCooling: false },
  { name: 'sugar', inStock: 0, needsCooling: false },
  { name: 'lime juice', inStock: 0, needsCooling: true },
  { name: 'soda', inStock: 0, needsCooling: true }
];

let names: string[] = [];
let inStock: string[] = [];
let needsCooling: string[] = [];

function initializeData(array: any[]): void {
  ingredients.forEach(function (item) {
    names.push(item.name);
  });

  ingredients.forEach(function (item) {
    if (item.inStock > 0) {
      inStock.push(`${item.inStock}`)
    } else {
      inStock.push('-');
    }
  });

  ingredients.forEach(function (element) {
    if (element.needsCooling) {
      needsCooling.push('yes');
    } else {
      needsCooling.push('no');
    }
  });
}

initializeData(ingredients);

function getLength(array: string[]): number {
  let biggestLength = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > biggestLength) {
      biggestLength = array[i].length;
    }
  }
  return biggestLength;
}

function processColumn(data: string[], column: string[], maxRowLength: number, empty: string): void {
  data.forEach((e, i, a) => {
    column.push(`${data[i]}${empty.repeat(maxRowLength - data[i].length)}|`)
  });
}

function createTable(): string[] {
  let empty: string = ' ';
  let horSep: string = '-';
  let sepLine: string = `+${horSep.repeat(getLength(names))}+${horSep.repeat(15)}+${horSep.repeat(10)}+`
  let header: string = `|Ingredient${empty.repeat(getLength(names) - 10)}|Needs cooling${empty.repeat(2)}|In stock${empty.repeat(2)}|`
  let table: string[] = [];
  let column1: string[] = [];
  let column2: string[] = [];
  let column3: string[] = [];

  table.push(sepLine, header, sepLine);

  processColumn(names, column1, getLength(names), empty);
  processColumn(needsCooling, column2, 15, empty);
  processColumn(inStock, column3, 10, empty);

  for (let i: number = 0; i < ingredients.length; i++) {
    table.push(`|${column1[i]}${column2[i]}${column3[i]}`);
  }
  table.push(sepLine);
  return table;
}

console.log(createTable());