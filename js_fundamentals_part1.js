// coding challange #1

/**
 * BMI = mass/height ** 2 = mass /(height * height)
 * 
 */

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark= massMark/heightMark**2;
const BMIJohn = massJohn/heightJohn**2; 
BMIMark
if(BMIJohn > BMIMark){
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}else{
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}
























// Functions calling other functions
// function cutFruite(fruite){
//     return fruite * 4;
// }


// function fruitPprocessor(apples, oranges){
//     const applePieces = cutFruite(apples);
//     const orangePices = cutFruite(oranges);

//     const juice = `Juice with ${applePieces} 
//                     piece of apple and ${orangePices }
//                     pieces of oranges.`;
//     return juice; 
// }
// //  console.log(fruitPprocessor(4, 2));    


// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]) ;
// console.log(age1x)


// -----------Array Operations Methods-----------
// const friends = ["Mike", "king", "Julia"];
// console.log(friends)
// friends.push("nikita");
// console.log(friends)

// coding challange #2 about arrays

// const calcTip = function(bill){
//     return bill >= 50 && bill<= 300 ? bill *0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(bills, tips)

// const calcTipArrowFunction = bill => bill >= 50 && bill <= 300 ? bill *0.15 : bill *0.2;

// ----------OBJECTS-----------------

// for( let i = 1; i <= 10; i+=2){
//     console.log("Hello" + i )
// }

// const types = [];

// for (let i = 0; i <= 10; i++){
//     console.log( )
// }


/// crash course Interview------
