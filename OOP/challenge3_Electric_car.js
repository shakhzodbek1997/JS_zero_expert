'use strict';

console.log("========Challange 3 Electric Cars==========");

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function(){
    this.speed +=10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function(make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
}

const tesla1 = new EV('Tesla', 120, 23);
const byd = new EV('BYD', 100, 25);

console.log(tesla1);
console.log(byd)




// --------------LINKING the PROTOTYPES---------------
console.log("============LINKING THE PROTOTYPES=================");
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
};

// THis accelerate method overwrite from parent class and remenmber this is exactly the definiton of polymorphism.
EV.prototype.accelerate = function(){
    this.speed +=20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with the charge of ${this.charge }`);
}

const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(90);
console.log(tesla);

tesla.accelerate();
tesla.brake()
tesla.accelerate();
tesla.brake()
tesla.accelerate();
tesla.accelerate();
tesla.brake()



