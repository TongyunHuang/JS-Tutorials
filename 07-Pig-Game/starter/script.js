'use strict';
// diagrams.net
// Define html elements
const dicePic = document.querySelector('.dice')
const currScore_0 = document.getElementById('current--0')
const currScore_1 = document.getElementById('current--1')
const scoreDisplay = [currScore_0, currScore_1]
const playerScore_0 = document.getElementById('score--0')
const playerScore_1 = document.getElementById('score--1')
const playerScore = [playerScore_0, playerScore_1]


let currentScore = 0;
let currentPlayer = 1;

// Define functions
const switchPlayer = function () {
    currentPlayer = 1 - currentPlayer;
}

const rollDice = function () {
    // Generate random dice roll
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    // Display dice roll
    dicePic.src = `dice-${diceNum}.png`;
    // * Is it a 1?
    if (diceNum === 1) {
        // switch player
        switchPlayer();
    } else {
        // add dice roll to currScore, display
        currentScore += diceNum;
        console.log(currentScore)
        scoreDisplay[currentPlayer].textContent = currentScore;
    }
}

// Listeners
document.querySelector('.btn--roll').addEventListener('click', rollDice)