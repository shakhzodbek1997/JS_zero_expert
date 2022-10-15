'use strict';

let hasDriversLicense = false;
const passtest = false;
if(passtest){
    hasDriversLicense = true
    console.log(hasDriversLicense, "you have license!");
}else{
    console.log(hasDriversLicense, " you couldn't pass the exam!")
}
// functions --------------

//undeclared function
function logger(item){
    console.log(hasDriversLicense, "item is here" + item, "hello from function logger!")
}
console.log(logger("3" + 4 + "7"));


function juiceMaker(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
    return juice;
}

const juice1 = juiceMaker(5, 6);
console.log(juice1, "This is a JUice !");

function calcAge(birthYear){
    return 2037 - birthYear;
}
const age = calcAge(1997);
console.log(age);  