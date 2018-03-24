/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// Variable declarations
var scores, roundScore, activePlayer, gamePlaying, dice1, dice2;

restartGame();

document.querySelector('.btn-roll').addEventListener('click', function() {

  if (gamePlaying === true) { // Check the game state variable
    // 1.Random number

    diceInit();

    if (dice1 !== 1 && dice2 !== 1) {
      roundScore += dice1 + dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScore; // Display the number inside element with ID #current-
    } else {
      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying === true) {
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
  }

  var maxScoreInput = document.querySelector('.input-box').value;
  var maxScoreCond;

  if (maxScoreInput) {
    maxScoreCond = maxScoreInput;
  } else {
    maxScoreCond = 100;
  }

  if (scores[activePlayer] >= maxScoreCond) {
    gamePlaying = false;
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
  } else {
    nextPlayer();
  }
});

document.querySelector('.btn-new').addEventListener('click', restartGame);


function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice-1').style.display = 'none';
  document.querySelector('.dice-2').style.display = 'none';
}


function restartGame() {
  roundScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  gamePlaying = true;

  //
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.dice-1').style.display = 'none';
  document.querySelector('.dice-2').style.display = 'none';
}

function diceInit() {
  dice1 = Math.floor(6 * Math.random()) + 1; // Create a random number and store it into var dice
  dice2 = Math.floor(6 * Math.random()) + 1; // Create a random number and store it into var dice

  var diceDOM = document.querySelector('.dice-1');
  diceDOM.style.display = 'block'; // Enable the display of dice
  diceDOM.src = 'dice-' + dice1 + '.png';

  diceDOM = document.querySelector('.dice-2');
  diceDOM.style.display = 'block'; // Enable the display of dice
  diceDOM.src = 'dice-' + dice2 + '.png';
}