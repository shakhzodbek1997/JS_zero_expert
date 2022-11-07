'use strict';

/**
 
const a = 'Test';
const b = ' TeSt2 ';

console.log(a);
console.log(b);

const oneWord = function(str){
    // console.log(str.replace(' ', '*').toLowerCase());// *string test 
    // console.log(str.replace(/ /g, '*').toLowerCase());// *string*test* 
    return str.replace(/ /g, '*').toLowerCase()
}


const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
    // return [first.toUpperCase(), ...others].join('$');
};


 */


/**
 

// Higher Order function
const transformer = function(str, fn){
    console.log(`Original STRING: ${str}`)
    console.log(`Transfprmed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('javaScript is the Best!', upperFirstWord); 

transformer('Javascript is the best!', oneWord);

const high5 = function(){
    console.log('👋');
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

 
 */

// returning Functions 

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//         return function(surName){
//             console.log(`${greeting} ${name} ${surName}`)
//         }
//     }
// }

// const greeterHey = greet('Hey!');
 
// greeterHey('Jonas'); // this greeterHey() function is equal to this function:  function(name){console.log(`${greeting} ${name}`);
// greeterHey('Martha')('Mayer');

/**
 * Our first function is greet returned a new function that we stored into this (greeteHey) variable
 * And so this(greeteHey) variable is now just a function that we can call (greeteHey('Jonas');) 
 * as we did here again sing the parenthesis syntax.
 *
 ------And of course we ca=ould also do it all in one go.
 */
// greet('Hello')('Piter')('Guchek') // outPut is same: Hello Piter Guchek

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
const greeter2Hey = greetArrow('Hey!');
greeter2Hey('Jonas'); greeter2Hey('Martha');

// in one line
greetArrow('Hello')('Piter');
