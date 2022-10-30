'use strict';

// 1) Destructuring  
// SPREAD, because on the RIGHT side of =
const arr = [1, 2, ...[3,4]];

// REST, because on LEFT side of the =
const [a, b, ...others ] = [1, 2,3, 4, 5];
console.log(a, b, others); // output >> 1 2  [3, 4, 5]

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
        console.log(`order received! ${this.starterMenu[starterIndex ]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log("Main Igredient is: >> ",mainIngredient);
        // Output: Main Igredient is: >>  Mushrooms
        console.log("Other Ingredients: >> ", otherIngredients);
        // Output: Other Ingredients: >>  ['onion', 'garlic', 'olives', 'spinach']
    }
};  

restaurant.orderPizza('Mushrooms', 'onion', 'garlic', 'olives', 'spinach');

const [pizza, , risatto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]; 
console.log(pizza, risatto, otherFood);

// Objects
const {fri, ...weekdays} = restaurant.openingHours;
console.log("Weekdays are: ",weekdays);
console.log("Friday: ",fri);

// 2) Functions
const add = function(...numbers){
    let sum = 0;
    for(let i = 0; i <numbers.length; i++){
        sum += numbers[i];
    }
    console.log("The sum is: >> ",sum);
}

add(2, 3);  // The sum is: >>  5
add(5, 3, 7, 2);  // The sum is: >>  17
add(8, 5, 4, 2, 3, 7, 9);  // The sum is: >>  38

const x = [50, 5, 2];
add(...x); // The sum is: >>  57

const rest1 = {
    name: 'Capri',
    numGuests: 20,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
};

rest1.numGuests = rest1.numGuests || 10; 
rest2.numGuests = rest2.numGuests || 10; 

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1)
console.log(rest2)