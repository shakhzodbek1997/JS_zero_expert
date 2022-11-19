'use strict';

const Person = function(firsName, birthYear){
    this.firsName = firsName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

const Student = function(firsName, birthYear, course){
    Person.call(this, firsName, birthYear);
    this.course = course;
}
 
// Linking Prototypes
console.log("=============Linking Prototypess===================");
Student.prototype = Object.create(Person.prototype) // Object.create(Person.prototype <--- it returns empty object

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firsName} and I study ${this.course}`);
}


const mike = new Student('Mike', 2020, 'Computer Sciences');
console.log(mike);
mike.introduce();
mike.calcAge();

const odam = new Student('Adam', 1997, 'Finance');
console.log(odam);
odam.calcAge();
odam.introduce();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__)





