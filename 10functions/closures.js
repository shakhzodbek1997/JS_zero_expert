'use strict';

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


