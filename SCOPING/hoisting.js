'use strict';

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'King';
let job = 'Developer';
const year = 1995; 


// Functions 
console.log("declaration", addDecl(2, 3));
// console.log("Expression", addFuncExp(2, 3));
// console.log("Arrow", addArrov("Arrov",2, 3));
function addDecl(a, b){
    return a+ b;
}

const addFuncExp = function(a, b){
    return a+ b;
}

var addArrow = (a, b) =>  a + b;

//  Example 

if(!numProducts){
    deleteShopingCart()
}


var numProducts = 10;

function deleteShopingCart() {
    console.log('All Products are deleted!');
}
