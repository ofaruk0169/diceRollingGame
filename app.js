/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//keeping count of the numbers involved for the games. 
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//need random number for the dice, use Math Random fucntion to roll the dice
//Multiply by 6 for a number between 0 and 5, use floor for full numbers. Also add 1 for dice mapping



// document.querySelector('#current-' + activePlayer).textContent =  dice;
// document.querySelector('#current-' + activePlayer).innerHTML =  '<em>' + dice + '</em>'

document.querySelector('.dice').style.display = 'none';

//select score ids
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


//select button, how to use Event Listeners. First argument is the event and the second event is the function you wnat the event to call
document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1 Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. display the dice results
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    

    //3 Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next Player
        nextPlayer();
    }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    //Update the UI with global score
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Check who won the game

    //Next player
    nextPlayer();

    
});

function nextPlayer () {
     //Next Player
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;

     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');

     document.querySelector('.dice').style.display = 'none';
}