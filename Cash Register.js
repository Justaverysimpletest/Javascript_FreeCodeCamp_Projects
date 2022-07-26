//Cash Register

/*Design a cash register drawer function checkCashRegister() 
that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) 
as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.*/

let currencyUnit = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid) {

  let a = (cash-price) * 100;
  let b = a;
  let left = [];
  let print = '';

  let cidSum = 0;
  let c = cid.filter(elem => elem[1] !== 0).reverse();

  c.forEach(elem => {
    let curr = elem[0];
    let currSum = elem[1] * 100;
    cidSum = cidSum + currSum;
    let amount = 0;
    while (a >= currencyUnit[curr] && currSum > 0) {
      amount = amount + currencyUnit[curr];
      a = a - currencyUnit[curr];
      currSum =  currSum - currencyUnit[curr];
    }
    if (amount != 0) {
      left.push([curr, amount / 100]);
    }
  });

  if (a > 0) {
    print = 'INSUFFICIENT_FUNDS';
    left = [];
  } else if (a == 0 && b == cidSum) {
    print = 'CLOSED';
    left = cid;
  } else {
    print = 'OPEN';
  }
  return { 'status': print, 'change': left };
}