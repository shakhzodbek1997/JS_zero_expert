'use strict';
/**
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
 */

// Coding Challenge # part 2

const calcAverage = (a, b, c) => (a+b+c)/3; // average score
console.log(calcAverage(3, 4, 5))

const scoreD = calcAverage(44, 23, 71);
const scoreK = calcAverage(65, 54, 49);
console.log(scoreD, scoreK);

const checkWinner = function(averD, averK){
    if(averD >= averK*2){
        console.log(`Dolphins win trophy🏆 ${averD} vs ${averK}`);
    }else if(averK >= averD * 2){
        console.log(`Koalas win trophy🏆 ${averK} vs ${averD}`);
    }else{
        console.log("No team Wins...")
    }
}

checkWinner(scoreD, scoreK);