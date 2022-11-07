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


// ---------call method----------
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

// -------Apply Method

const flightData = [533, 'GEORGE COOPER'];
book.apply(swiss, flightData); // THIS APPLY() METHOD IS OLD VERSION SQO IT DON'T USE ANYMORE
console.log(swiss);     

book.call(swiss, ...flightData);

