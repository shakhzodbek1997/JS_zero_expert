'use strict';

const openingHours = {
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
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
    order(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
        console.log(`order received! ${this.starterMenu[starterIndex ]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
}; 

if(restaurant.openingHours && restaurant.openingHours.mon){
    console.log(restaurant.openingHours.mon.open);
}  

// with OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days){
    const open = restaurant.openingHours[day]?.open ??  'closed';  
    console.log(`On ${day}, we open at ${open}`); 
}

// Methods 
console.log(restaurant.order?.(0,1) ?? 'Method does not exist'); 
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doesn't exist!")

// Optional Chaining in Arrays

const users = [
     {
        name: 'Jonas',
        email: 'hello@jonas.com'
     }
];
// const users = [];

console.log(users[0]?.name ?? 'User array Empty!');

if( users.length > 0){
    console.log(users[0].name);
}else{
    console.log('user array empty'); 
}

const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open on  `)

// Looping Objects 
for(const day of properties ){
    console.log(day)
}