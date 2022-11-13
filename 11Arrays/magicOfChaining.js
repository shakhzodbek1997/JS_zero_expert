'use strict';

const euroToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];  // + values are deposite - values are withdrawals


// PIPELINE
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * euroToUsd)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);