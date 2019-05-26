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

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0; //0 first player and 1 second player

//in order to create dice, calculate random number.