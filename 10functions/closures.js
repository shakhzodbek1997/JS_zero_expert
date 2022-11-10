'use strict';
/*

const secureBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++; 
        console.log(`${passengerCount} passengers`);
    }
}
 
const booker = secureBooking();

booker(); // 1 passengers
booker();// 2 passengers
booker();// 3 passengers

// !!!! ----- We don not have to manually create closures, This is a JS feature that happens autmatically 

 */

// first example Closures
let f;

const g = function(){//function expression
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}

const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2);
    };
}
g();
f();

// Re-assigning f function
h();
f(); 

//  Example 2
const boardPassengers = function(n, wait){
    const perGroup = n/3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} personal `);
        console.log(`There are 3 groups, each with ${perGroup} passengers`)
    }, wait * 1000); 

    console.log(`Will Start boarding in ${wait} seconds `);
};

boardPassengers(180, 3);

(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue ';  
    });
})(); 