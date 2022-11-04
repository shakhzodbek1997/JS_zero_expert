'use strict';

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, 'Substitutioin'],
    [47, '⚽ GOAL'],
    [61, 'Substitutioin'],
    [64, '🟨 Yellow Card'],
    [69, '🟥 Red Card'],
    [70, 'Substitutioin'],
    [72, 'Substitutioin'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟨 Yellow Card'],
]);

//  1. Event types
const events = [...new Set(gameEvents.values())];
console.log(events); 

// 2. 
gameEvents.delete(64);
console.log(gameEvents);

//  3.
console.log(
    `An Event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log("Time Keys: ", time);

console.log(
    `An Event happened, on average, every ${time  / gameEvents.size} minutes`
);

//  4.   
for(const [min, event] of gameEvents){
    const half = min <= 45 ? 'FIRST' : 'SECOND';
     console.log(`[${half} HALF] ${min} : ${event}`);
}