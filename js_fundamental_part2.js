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
/**
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
 */

//  --- arrays Coding Challenge #2
 
const calcTip = function(bill){
    return bill  >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];



console.log(bills, tips, totals);

// const  calculateTip = bill => bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;

// DOT vs Bracket Notations # Challenge
/**
 Jonas has 3 friends, and his best friend is called Michael 
 */

 const jonas = {
    firstName: "Jonas",
    lastName: "Guchek",
    age: 25,
    job: "Web Developer",
    friends: ["Michael", "Tom", "Elon"]
 }

 console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)
