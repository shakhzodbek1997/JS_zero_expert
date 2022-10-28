'use strict';

console.log(this);

const calcAge = function(birthYear){
    console.log(2022  - birthYear);
    console.log(this); /** UNdefined  <--  because of strict mode*/
}
calcAge(1997);

const calcAgeArrow = (birthYear) =>{
    console.log("CalcAgeArrow function: ",2022  - birthYear);
    console.log(this); /** UNdefined  <--  because of strict mode*/
}
calcAgeArrow(1995);


const jonas = {
    year: 1991,
    calcAge: function(){
        console.log(this);
    }
}

jonas.calcAge();

