/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Scores of each player
// var score1 = 0;
// var score2 = 0; 

//But to make it look clearInterval, and use one variable set it as an array

// var scores = [0, 0];
// var roundScore = 0;
// it is just one value, because one round score at a time

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0; //0 first player and 1 second player

//in order to create dice, calculate random number.
// get no. b/w 1-6

// > Extra: Math.random() gives a random no. b/w 0-1

// If we want value b/w 1-6, multiply Math.random() by 6
// so Math.random() * 6 which gives value b/w 0-5. To get value b/w 1-6, add 1 to it; `(Math.random() * 6) + 1`

// `Math.floor()` removes decimal point and give whole no.

dice = Math.floor(Math.random() * 6) + 1;

// The object that gives access to DOM is document object.

// selects the first element it finds
// here the element with the given id
// to change the content of the element use `textContent` method

// document.querySelector('#current-0').textContent = dice;

// selecting the element dynamically
document.querySelector('#current-' + activePlayer]).textContent = dice;