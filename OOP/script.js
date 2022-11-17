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




