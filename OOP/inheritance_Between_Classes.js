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
console.log(mike.__proto__.__proto__);

console.log("-----------------------------------------------");

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
        else alert(`${name} is not a Full Name!`);
    }

    get fullName(){
        return this._fullName;
    }

    // Static method
    static hey(){
        console.log('Hey THere ✋');
    }
} 

class StudentCl extends PersonCL{
    constructor(fullName, birthYear, course, country){
        // Always needs to happen first!
        super(fullName, birthYear);
        this.course = course;   
        this.country = country; 
    }

    introduce(){
        console.log(`My name is ${this.fullName} and I study ${this.course} and I am From ${this.country}`);
    }

    calcAge(){
        console.log(`i ma ${2037 - this.birthYear} years old, 
        but as a student I fell more like ${2037-this.birthYear+10}`)
    }
}

const martha = new StudentCl('Martha Jonas', 2012,  'CS', 'Canada')
martha.introduce();
martha.calcAge();
 
/////////////////////////Inheritance between "Classes": Object.create///////////////////////////////
console.log("-----------------Inheritance between 'Classes': Object.create--------------");

const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },

    init (firstName, birthYear){
        this.firsName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firsName, birthYear, course){
    PersonProto.init.call(this, firsName, birthYear);
    this.course = course;
};

StudentProto.introduce = function(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);   
jay.init('Jay', 2010, 'Computer Sciences ');
jay.introduce();
jay.calcAge();










