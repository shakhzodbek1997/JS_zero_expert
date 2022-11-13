'use strict';

/** 1. Calculate the dog age in human years using the
following formulas: if the dog is <= 2 years old,
humanAge = 2 * dogAge. if the dog is => 2 years old,
humanAge == 16+ dogAge * 4.

2. Exclude all dogs that are less than 18 human years old
(which is the same as keeping dogs that are at least 18 years old)

3. Calculate  the average human age of all adoult dogs (you should 
    already know from other challenges how we chalculate averages)

4. run the function for both test datasets.

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
 */

const calcAverageHumanAge = function(ages){
    const humanAges = ages.map(function(age){
        if(age <= 2){
            return 2 * age;
        }else{
            return 16 + age * 4 
        }
    })
    console.log(humanAges);
// ----------------------------------

    const adults = humanAges.filter(function(age){
        return age >= 18;
    });
    console.log(humanAges);
    console.log(adults);

//  ------------------------------------
    const average = adults.reduce((acc, age) => acc + age, 0)/ adults.length;
    return average;

}

const avg1 = calcAverageHumanAge( [5, 2, 4, 1, 15, 8, 3]);  //  [36, 4, 32, 2, 76, 48, 28]
const avg2 = calcAverageHumanAge( [16, 6, 10, 5, 6, 1, 4]); 
console.log(avg1, avg2)