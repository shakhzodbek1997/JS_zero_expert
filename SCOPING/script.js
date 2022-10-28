 'use strict';
 
 function calcAge(birthYear){
    const age = 2022 - birthYear;

    function printAge(){
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const firstName = "Petro";
            const str = `Oh, and you are a millenial, 
            ${firstName}`;
            console.log(str);

            function add(a, b){
                return "a + b added then: ", a + b;
            }
        } 
        console.log(millenial); //var is function scope, const and let are block scope
        // console.log(add(4, 6))
    }
    printAge();

    return age;
 }
 
 // firstName is Global  
 const firstName = "King";
 calcAge(1993);  