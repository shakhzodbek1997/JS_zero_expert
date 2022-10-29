'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};

const {name, openingHours, categories} = restaurant ;
console.log(name, openingHours, categories);

const {name: restourantName, openingHours: hours, categories: tags} = restaurant ;
console.log(restourantName, hours, tags);
 

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;  // this [x, y, z] syntax destructured from arr
// console.log(x, y, z);  //2 3 4  output on cansole

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Vegetarian  Italian

// Using Destructuring
[main, secondary] = [secondary, main]; //dom't need to use Let and Const here
// Because we are simply reassigning the values of the two variables.
console.log(main, secondary); 

// Receive 2 return values from a fucntion
const [starter, mainCourse] = (restaurant.order(2, 0));
console.log(starter, mainCourse);

// Nested destructuring arrays
const nested = [8, 4, [5, 6]];
// const [i, , j] = nested; 
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k, " this is nested one")

// we can also set default values for the variables when we are extracting them
// it will be very udefull in the case that we don't know the length of the array. 
// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // output >> 8 9 undefined.

const [u=1, h=1, g=1] = [55];
console.log(u, h, g); // output >> 55 1 1










