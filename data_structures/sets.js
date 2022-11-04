'use strict';  

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);

console.log(orderSet);
console.log(new Set('jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('garlic Bread');
orderSet.add('garlic Bread');
console.log(orderSet, "Last array");
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet, 'After Deleting');

for(const order of orderSet){
    console.log(order);
}   

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
)
console.log(new Set('jonasschmedtman').size)




 