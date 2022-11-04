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

const question = new Map([
    ['question', 'What is the best car for you?'],
    [1, 'BMW'],
    [2, 'KIA'],
    [3, 'Mustang'],
    ['correct', 3],
    [true, 'correct😀'],
    [false, 'Try again🤔']
]);

console.log(question);

// conveert object to the map 
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap)


console.log('====================================');
console.log('Quiz app');

console.log(question.get('question'), "🤐");
for(const [key, value] of question){
    if( typeof key === 'number'){
        console.log(key, value);
    }
}

const yourAnswer = Number(prompt('Your Answer: '))
console.log("you chose this: ", yourAnswer)
console.log("the correct answer is: ", question.get('correct'))

console.log(question.get( question.get('correct') === yourAnswer ))
console.log('====================================');

// Convert map to Array
console.log("Convert map to Array",[...question]);
console.log([...question.keys()]);
console.log(question.values())
console.log("testing",question.entries())
