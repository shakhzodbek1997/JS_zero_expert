'use strict';

const airline = "UZBAirways";
const airline2 = "Turkish Airlines"
const plane = 'A320';

console.log(airline.indexOf('a')); // 3
console.log(airline.lastIndexOf('a')); // 7
console.log(airline.slice(3)); // Airways
console.log(airline.slice(0, 3)); // UZB
console.log(airline2.slice(0, airline2.indexOf(' '))); //Turkish
console.log(airline2.slice(airline2.lastIndexOf(' '))) // Airlines
console.log(airline2.slice(-2)); // es
console.log(airline.slice(1, -1 )) // ZBAirway

console.log('====================================');
const checkMiddleSeat = function(seat){
    // B and E are middle  seats
    const s = seat.slice(-1);
    if(s === 'B' || s ==='E'){
        console.log("You Got the Middle seat 😀");
    }else{
        console.log('You got Lucky 😎');
    }
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
console.log('====================================');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));
console.log(typeof new String('Jonas').slice(1));

console.log('====================================');

// Comparing E-mails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase ();
const trimmedEmail = lowerEmail.trim();
console.log("trimmed Email is: ",trimmedEmail);
console.log(email);

const normalEmail = loginEmail.toLocaleLowerCase().trim();
console.log("Normalized Email: ",normalEmail);
console.log(email === normalEmail) 
console.log('====================================');

// replacing
const priceGB = '288,97₤'
const priceUS = priceGB.replace('₤', '$').replace(',', '.')
console.log(priceUS);

const announcement = 'All Passangers come to boarding door 23. Boarding door 23!'
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane2 = 'A320NEO';
console.log(plane2.includes('A320'));
 console.log(plane.startsWith('Air'))

 console.log("first output: ",'Jonas Muller'.split(' '));
 const [firstname, lastName] = 'Jonas Myuller'.split(' ');
 console.log("Second Output: ",firstname, lastName)
 console.log(...'Jonas Myuller'.split(' '))

 const newName = ['Mr.', firstname, lastName.toUpperCase()].join('-');
 console.log(newName);


  
 console.log('====================================');
 console.log("Split Method exe: ");

 const capitalizeName = function(name){
    const names = name.split(' '); // returns array  ['jesica', 'ann', 'smith', 'davis']
    const nameUpper = [];
    for(const n of names){
        nameUpper.push(n[0].toUpperCase() + n.slice(1));
        nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(nameUpper.join('_')); 
}

capitalizeName('jesica ann smith davis');
capitalizeName('jonas schmedtmann');
 console.log('====================================');

 console.log('====================================');
 console.error("Padding");
 const maskCredditCard = function(num){
    const str = num + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
 }
console.log(maskCredditCard(8600124586971255));
console.log(maskCredditCard('55557777888899996666')); 
 console.log('====================================');

 // Repeat 
 const message2 = 'Bad Weather ... All Departures Delayed...';
 console.log(message2.repeat(5));

 const planesInLine = function(n){
    console.log(`there are ${n} planes in Line ${'✈'.repeat(n)}`)
 }
 planesInLine(5);
 planesInLine(3);
 planesInLine(12);