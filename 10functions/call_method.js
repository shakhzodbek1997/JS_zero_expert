'use strict';

// uzairways << fuction contains the book function
const uzairways = {
    airline: 'UzAirWays',
    iataCode: 'UZ',
    bookings: [],
    //  book: function(){}, << this is the old version of syntax
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};  

uzairways.book(239, 'TOM CRUISE'); 
uzairways.book(352, 'BRAD PITT'); 
console.log(uzairways);
console.log("test: ", uzairways.bookings);

const eurowings = {
    airline: 'EuroWings',
    iataCode: 'EW',
    bookings: [],
};

const book = uzairways.book; // this book function is a separate function from the uzairways.book()
//this method doesn't work
// book(23, 'Sara Williams');


console.log('==================== CALL METHOD ====================');

book.call(eurowings, 23, 'JIM CARREY');
console.log(eurowings);

book.call(uzairways, 239, 'HARRY POTTER');
console.log(uzairways); 



const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 583, 'DALE CARNEGIE');

console.log('==================== Apply Method ====================');

const flightData = [533, 'GEORGE COOPER'];
book.apply(swiss, flightData); // THIS APPLY() METHOD IS OLD VERSION SQO IT DON'T USE ANYMORE
console.log(swiss);     

book.call(swiss, ...flightData);

console.log("====================== BIND method ==================");
const bookEW = book.bind(eurowings);
const bookUZ = book.bind(uzairways);
const bookLX = book.bind(swiss);

bookEW(23, 'STEVEN WILLIAMS');  

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Shakhzod Yuldoshov');
bookEW23('Doniyor Nabiev');


console.log('================= Event Listeners ===================');

uzairways.planes = 300; // this company has 300 planes
uzairways.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log("I am here: ", this.planes)
}

document.querySelector('.buy').addEventListener('click', uzairways.buyPlane.bind(uzairways));

console.log('==================PARTIAL APPLICATION==================');

const addTax = (rate, value) => value + (value * rate)/100; // this is tax adding ARROW function

const taxAdd = function(rate, value){ // simple function not an arrow
    return value + (value * rate)/100;
}

console.log(addTax(10, 200));


const addVAT = addTax.bind(null, 23);
console.log(addVAT(100));
console.log(addVAT(200));

const addTaxRate = function(rate){
    return function (value){
        return value + (value * rate)/100;
    }
}

const addVAT2 = addTaxRate(23);
console.log(addVAT2(100));
console.log(addVAT2(200));