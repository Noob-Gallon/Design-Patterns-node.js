// Game class의 instance를 만들 수 있음.
const Game = require('./Game');

// player class의 instance를 만들 수 있음.
const Player = require('./Player');

const Pete = new Player('Pete');
const Mike = new Player('Mike');
const Poker = new Game();

Poker.join(Pete);
Poker.join(Mike);

Pete.wins(20);

Mike.wins(30);
Mike.wins(40);
Mike.wins(40);
Mike.wins(40);

Pete.wins(1000);
Pete.loses(1000);

console.log('Scoreboard: ', Poker.scores());
console.log(`Winnder: ${Poker.getWinner().name} with ${Poker.getWinner().points} points`);