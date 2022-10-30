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
};  

/**
 * ------------- FOR-OF loop ----------------
 *
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for(const item of menu){
    console.log(item);
}   

for (const [i, el] of menu.entries()){
    console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()])
*/


// ---------------------Enhanced Object Literals-----------------------

