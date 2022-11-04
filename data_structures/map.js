'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [`day-${2+4}`]: {
        open: 0,
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // ES6 enhanced Object literals
    openingHours,
    
    order(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
        console.log(`order received! ${this.starterMenu[starterIndex ]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPizza(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};  


const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'we are Open :D')
    .set(false, 'We are closed :(');

console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true));  // we are Open :D
console.log(rest.get('1'));   // undefined
console.log(rest.get(false));  // We are closed :(

const time = 24;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // we are Open :D4

console.log(rest.has('categories')) // true

// rest.clear();
rest.set([1,2], 'Test');
console.log(rest);
console.log("the size is the rest is equal to : ", rest.size); // 8

rest.get([1, 2])

