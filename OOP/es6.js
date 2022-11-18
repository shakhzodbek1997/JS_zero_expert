'use strict';

// class expression method
const PersonClass = class{
    // same structure with below (class Declaration)
}

//Class Declaration
class PersonCL{
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Method will be added to .prototype property
    calcAge(){
        console.log(2037 - this.birthYear);
    }

    greeting(){
        console.log(`Assalomu alaykum ${this.fullName}`)
    }

    get age(){
        return 2037 - this.birthYear;
    }


    // Set a property that already exist
    set fullName(name){
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a Full Name! `)
    }

    get fullName(){
        return this._fullName;
    }
} 


const maria = new PersonCL('Maria Morevna', 2001);
console.log(maria);
maria.calcAge();
console.log("Maria's age is:", maria.age);


console.log(maria.__proto__ === PersonCL.prototype);

// PersonCL.prototype.greet = function(){
//     console.log(`Hi ${this.fullName}`)
// }
maria.greeting();

// 1. classes are not hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode


const walter = new PersonCL('Walter White', 1995);

console.log('==================GETTER and SETTER==================');

const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
console.log(account.latest);


console.log('===============Object.create METHOD=====================');

const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto); // The steven object was created based on PersonoProto
console.log(steven);  // it returns {} empty obeject
steven.name = 'Steven';
steven.birthYear = 2003;
steven.car = 'BMW';
steven.calcAge();
console.log(steven.__proto__ === PersonProto);


const sarah = Object.create(PersonProto);
console.log(sarah);
sarah.name = 'Sarah';
sarah.birthYear = 2000;
sarah.calcAge();

const dan = Object.create(PersonProto);
dan.init('Dan Lok', 1987);
dan.calcAge();

console.log('================Chellenge 2 in ES 6====================');

class CarCl {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed +=10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake(){
        this.speed -=5;
        console.log(`${this.make} is going at ${this.speed} km/h`);    
    }

    get speedUS(){
        return this.speed /1.6;
    }

    set speedUS(speed){
        this.speed = speed * 1.6;
    }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50; 
console.log(ford);