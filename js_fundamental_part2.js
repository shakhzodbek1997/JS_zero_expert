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

/**
const calcTip = function(bill){
    return bill  >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];



console.log(bills, tips, totals);     */

// const  calculateTip = bill => bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;

// DOT vs Bracket Notations # Challenge
/**
 Jonas has 3 friends, and his best friend is called Michael 
 */

 /**

 const jonas = {
    firstName: "Jonas",
    lastName: "Guchek",
    age: 25,
    job: "Web Developer",
    friends: ["Michael", "Tom", "Elon"]
 }

 console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)
 */


 // Coding Challenge # 3
/**
 const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass/this.height ** 2;
        return this.bmi;
    }
 }

 const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass/this.height ** 2;
        return this.bmi;
    }
 }

 mark.calcBMI();
 console.log(mark.bmi);

 
 john.calcBMI();
 console.log(john.bmi);

 if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higheer than ${john.fullName}'s BMI (${john.bmi})`)
 }else if(john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higheer than ${mark.fullName}'s BMI (${mark.bmi})`)
 }else{
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) and ${john.fullName}'s BMI (${john.bmi}) are equal!`)
 }
  */

 // LOOping Arrays

//  const years = [1991, 1995, 2001, 2019];
//  const ages = [];

//  for(let i = 0; i < years.length; i++){
//     ages.push(2022 -years[i]);
//  }
//  console.log(ages); 

//  ---------- Fudamental JS part 2
 const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
 }

 const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
 const tips = [];
 const totals = [];

 for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
 }
 console.log(bills)
 console.log("-----------------------")

 console.log(tips)
 console.log("-----------------------")

 console.log(totals)
 console.log("-----------------------")

 console.log(bills, tips, totals)

 const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
 }