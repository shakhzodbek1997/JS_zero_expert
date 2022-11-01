'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Srancho',
            'Gotze,'
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
}; 

// Ex1.
for(const [index, player] of game.scored.entries()){
    console.log(`Goal ${index + 1}: ${player}`);   
}

// Ex2. --> We have to calculate the average odd.
const odds = Object.values(game.odds); // this return an array [1.33, 3.25, 6.5]
let average = 0;
for(const odd of odds) // odd is equal 1.33 3.25 and 6,5
    average += odd; //  0 + 1.33
    average /= odds.length;
    console.log("last average",average);


// Ex 3. 
for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' :     `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd} `);


}