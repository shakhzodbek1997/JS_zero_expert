'use strict';

// Task: is to create a function called CHECKDOGS
// which accepts these two arrays and does the following things.  
// 1. shallow copies of julia's array
// 2. an then remove the cat ages from the copied array  
 
// 3. create an array with both JUlias and Kate's data


const checkDogs = function(dogsJulia, dogsKate){
    const dogsJuliaCorrected = dogsJulia.slice();

    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);

    // dogsJulia.slice(1, 3)

    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);


    dogs.forEach(function(dog, i){
        if(dog >= 3){
            console.log(`Dog number ${i+1} is an adoult, and is ${dog} years old`)
        }else{
             console.log(`Dog number ${i+1} is still a puppy🐶`);
        }
    })
    console.log(dogsJuliaCorrected)

}
checkDogs([3,5,2,12,7], [4, 1, 15, 8, 3]);    