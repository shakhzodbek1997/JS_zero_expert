'use strict';

const calcAverageHumanAge = function(ages){
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
        
// ----------------------------------

    const adults = humanAges.filter(age => age >= 18); 

//  ------------------------------------

    const average = adults.reduce((acc, age) => acc + age, 0)/ adults.length;
    return average;
};

const calcAveragehumanageArrow = ages => ages
    .map(age => (age <= 2 ? 2 * age : 16 + age *4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, att) => acc + age / arr.length, 0);

const avg1 = calcAveragehumanageArrow( [5, 2, 4, 1, 15, 8, 3]);  //  [36, 4, 32, 2, 76, 48, 28]
const avg2 = calcAveragehumanageArrow( [16, 6, 10, 5, 6, 1, 4]); 
console.log(avg1, avg2);