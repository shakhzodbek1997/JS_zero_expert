'use strict';

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const jonas = new Person('Jonas', 1991);
console.log(jonas)