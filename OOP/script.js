'use strict';
console.log('---------------------Creating Object with Constructor-----------------')

const Person = function(firstName, birthYear){
    // Instance Properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never do create function inside consructor object
    // because each objects would carry around this function here.
    // if we had a thousands objects, we would essentially create a thousand copies
    
    // this.calcAge = function(){
    //     console.log(2037-this.birthYear);
    // }
}
  
const jonas = new Person('Jonas', 1991);
console.log(jonas)

// 1. New {} empty function created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {} object

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// ------------Prototypes---------------------
console.log('---------------------Prototypes-------------------')
console.log(Person.prototype); //{constructor: ƒ}

Person.prototype.calcAge = function(){
    console.log( 2037-this.birthYear);
}
jonas.calcAge();
jack.calcAge();
matilda.calcAge();


// 3. {} linked to prototype
console.log(jonas.__proto__);//    
console.log(jonas.__proto__=== Person.prototype); 

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person)); 

// ---Porperties on the Prototype------
console.log("---------------------prototypeOfLinkedObjects--------------------");
Person.prototype.species = 'hOMO sAPIENS'; // Person ga species degan prototype property qoshildi 
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));// true
console.log(jonas.hasOwnProperty('species')); // false  <-- because this property 
// is not really inside of the jonas Object
// It simply has access to it because of its prototype. So because 
// it's in the prototype property of person 


console.log(jonas.__proto__);

// -------Object Prototype-------
console.log("--------------Object.prototype(top of prototype chain)--------------");
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 9, 6, 9, 3]; // new array === []
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
    return [...new Set(this)];
}
 
console.log(arr.unique()); // [3, 6, 4, 5, 9]

const h1 = document.querySelector('h1');
 
console.dir(x => x + 1);


/// Challenge 1 in OOP

const Car = function(make, speed){
    this.make = make;
    this.speed = speed; 
};
Car.prototype.accelerate = function(){
    this.speed +=10;
    console.log(`${this.make} is going at ${this.speed}km/h`)
} 
 

Car.prototype.brake = function(){
    this.speed -=5;
    console.log(`${this.make} is going at ${this.speed}km/h`)
}

const bmw = new Car('BMW', 120);
const mers = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

