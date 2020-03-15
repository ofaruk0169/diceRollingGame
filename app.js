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

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

document.querySelector('#current-' + activePlayer).textContent =  dice;
// document.querySelector('#current-' + activePlayer).innerHTML =  '<em>' + dice + '</em>'

document.querySelector('.dice').style.display = 'none';
