'use strict';

// Created Account class
class Account {
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for Opening an account, ${owner}.`)
    }


    // basically these methods here, are the interface to our objects, and we also call this API
    // Public Interface
    deposit(val){
        this.movements.push(val);
    }
    
    withdraw(val){
        this.deposit(-val);
    }

    approveLoan(val){
        return true;
    }

    requestLoan(val){
        if(this.approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved`)

        }
    }
};

const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000); 

console.log(acc1);
console.log(acc1.pin);

 