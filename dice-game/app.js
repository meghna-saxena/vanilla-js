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

//But to make it look clear, and use one variable set it as an array
// var scores = [0, 0];
// var roundScore = 0;
// it is just one value, because one round score at a time

var scores, roundScore, activePlayer;

init();

// setting up event handler to roll the dice and update the current score
document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = './images/dice-' + dice + '.png';

    // 3. Update the round score, only if the roll no. was not 1
    if (dice !== 1) {
        // add score
        roundScore += dice;
        // roundScore = roundScore + dice;

        // display the result as current score
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
})

// implementing hold event listener and update the global score
document.querySelector('.btn-hold').addEventListener('click', function () {
    // add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    //scores[activePlayer] = scores[activePlayer] + roundScore;

    // update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // check if player wins the game
    if (scores[activePlayer] >= 10) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        nextPlayer();
    }
})

function nextPlayer() {
    // next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    // removing and adding classes
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    //toggle classes
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // hide the dice when value = 1
    document.querySelector('.dice').style.display = 'none';
}

// add event listener for new game btn
// document.querySelector('.btn-new').addEventListener('click', function () {
//     init();
// })

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    // scores = [0, 0]; //global score
    // roundScore = 0; //current score
    // activePlayer = 0; //0 first player and 1 second player
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    // use querySelector to change the css of some element
    document.querySelector('.dice').style.display = 'none';

    // assigning initial value to current score and global score
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    // rename it a name1 and name2
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    // add active class to first player
    document.querySelector('.player-0-panel').classList.add('active');
}