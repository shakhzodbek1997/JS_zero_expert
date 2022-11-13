'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function(movements){
    containerMovements.innerHTML = '';
    
    movements.forEach(function(mov, i){
        const type = mov > 0 ? 'deposit' : 'withdrawal'

        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__value">${mov}€</div>
        </div>     
        `
        containerMovements.insertAdjacentHTML('afterbegin', html);
    })
}

displayMovements(account1.movements);


const calcDisplayBalance = function(movements){
    const balance = movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);
 

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log("------FOR EACH WITH THE MAPS---------");

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(currentValue, key, map){
    console.log(`${key}: ${currentValue}`); 
})


console.log("------FOR EACH WITH THE SETS ---------");

const currenciesUnique = new Set(['USD', 'GPR', 'USD', 'EUR',  'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function(value, key, map){
    console.log("Values is: ", value);
    console.log("Key is: ", key);
    // console.log("map is: ", map)
})


console.log("---------------FOR OF methd------------");

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];  // + values are deposite - values are withdrawals

for(const movement of movements){
    if(movement > 0){
        console.log(`You desposited ${movement}`)
    }else{
        console.log(`You withdrew ${Math.abs(movement)}`)
    }
}

console.log('----------------FOR OF with DESTRUCTURING-------------');
for(const [i, movement] of movements.entries()){
    if(movement > 0){
        console.log(`Movement ${i+1}: You desposited ${movement}`)
    }else{
        console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`)
    }
}


console.log('----------------FOR EACH----------');
movements.forEach(function(movement, index, arr ) {
    if(movement > 0){
        console.log(`Movement ${index+1}: You desposited ${movement}`)
    }else{
        console.log(`Movement ${index+1}: You withdrew ${Math.abs(movement)}`)
    }
});
console.log('--------------------------------------')

/////////////////////////

let arr = [ 'a', 'b', 'c', 'd', 'e'];


console.log(arr.slice(2)); // ["c", "d", "e"]
console.log(arr.slice(2, 4)); // ["c", "d"]
console.log(arr.slice(-3)); // ['c', 'd', 'e']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice(-1), 'SLICE -1');

// coppying rray to new one with slice() method
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
// it is possible with spread operators as well
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// SPLICE method
console.log("--------splice-------")
// console.log(arr.splice(2)); //  ['c', 'd', 'e']

console.log(arr.splice(1, 3), 'SPLICE 1, 3'); // ['b', 'c', 'd'] 'SPLICE 1, 3'

console.log(arr.splice(-1),  'SPLICE -1'); //['e']
console.log(arr);  // ['a', 'b']
// SPLICE is mutates the original array.


// REVERSE method does actualy mutate originall array
console.log("------------Reverse---------");
arr = [ 'a', 'b', 'c', 'd', 'e'];
const arr2 = [ 'j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j'] 
console.log(arr2, 'ORIGINAL arr2 array');


// CONCATINATION METHOD
const letters = arr.concat(arr2.reverse()); 
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN method
console.log(letters.join(' - '));

// AT method
console.log("---------------AT method---------------")
const numArr = [23, 11, 64];
console.log(numArr[0]);
console.log(numArr.at(0));

// getting the last array element 
console.log(numArr[numArr.length - 1]); // 64
console.log(numArr.slice(-1)); // [64]
console.log(numArr.slice(-2)); // [11, 64]
console.log(numArr.slice(-1)[0]); // 64

console.log(numArr.at(-1)); // 64
console.log(numArr.at(-2), "this"); // 11

console.log('Jonas'.at(0));
console.log('Jonas'.at(-1));




 

  




 