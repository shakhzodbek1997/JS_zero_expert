'use strict';

// Immediately Invoked Functions Expressions (IIFE)
// sometimes we need a function that is only executed once. and then never again. 
// so basically a fucntion that disappears right after it's called once. 
const runOnce = function(){
    console.log('This will never run again');
}
runOnce();


// IIFE
(function(){
     console.log('This will never run again!');
     const isPrivate = 23;
})();
console.log(isPrivate); // it doesn't work 

(() => console.log('This will ALSO never run again'))
();

{
    const isPrivate = 23;
    var notPrivate = 46
}
console.log(isPrivate);
console.log(notPrivate);

