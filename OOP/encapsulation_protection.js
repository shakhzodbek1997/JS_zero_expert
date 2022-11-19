'use strict';



// 1.Public fields 
// 2. private fields
// 3. Public methods
// 4. Private methods
//  (there is also the static version)

class Account {
    // 1. Public Fields (instances);
    locale = navigator.language; 

    // 2. Private Fields (instances);
    #movements = []; // # makes a field private
    #pin;

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        // Protected property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for Opening an account, ${owner}.`)
    }

    // 3. Public Methods
    // basically these methods here, are the interface to our objects, and we also call this API
    // Public Interface
    getMovements(){
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val);
        return this;
    }
    
    withdraw(val){
        this.deposit(-val);
        return this;
    }


    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    static helper(){
        console.log('Helper');
    }

    // 4. private Methods --> very useful to hide the implimentation details from the outside  
    _approveLoan(val){
        return true;
    }
};

const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1._movements. push(250);
// acc1._movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
// console.log(acc1.#movements);
// console.log(acc1.#pin )
// console.log(acc1.#approveLoan(100));
Account.helper();

console.log("------------CHAINING METHOD----------------");

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

