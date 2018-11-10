'use strict';
export { };

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

function getNameAndBalance(accountNumber: number) {
  let found = accounts.find(function (element) {
    return element.accountNumber === accountNumber;
  });
  if (found) {
    console.log(`${found.clientName}, ${found.balance}`);
  } else {
    console.log('404 - account not found')
  }
}

getNameAndBalance(11234543);

function transferAmount(array: any[], fromAccountNumber, toAccountNumber, amountOfCash) {
  let from: any = array.find(function (element) {
    return element.accountNumber === fromAccountNumber;
  });
  let to: any = array.find(function (element) {
    return element.accountNumber === toAccountNumber;
  });
  if (from && to && from.balance - amountOfCash >= 0) {
    from.balance -= amountOfCash;
    to.balance += amountOfCash;
    console.log(accounts);
  } else if (!from || !to) {
    console.log('404 - account not found');
  } else if (from.balance - amountOfCash < 0) {
    console.log('Not enough cash')
  }
  return accounts;
}

transferAmount(accounts, 23456311, 43546731, 500);

export = {
  getNameAndBalance,
  transferAmount,
  accounts
};