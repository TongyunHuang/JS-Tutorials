'use strict';
//////////////
// 72. Selecting and Manipulating Elements
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number 🌺'
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.score').textContent = score

// Check buttom onclick
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // when no input
    if (!guess) {
        displayMessage('No number🚨');
    }
    // When player win
    else if (guess == secretNumber) {
        displayMessage('Correct Number! 🌺');
        document.querySelector('.number').textContent = secretNumber;
        score++;
        document.querySelector('body').style.backgroundColor = '#60b437';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else {
        const text = guess > secretNumber ? 'Too High! 🚗' : 'Too Low! 🥀'
        displayMessage(text);
        score--;
    }
    // when lose
    if (score <= 0) {
        displayMessage('You loss the game 🥀');
    }
    document.querySelector('.score').textContent = score

})

// Reset buttom listener
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
})
