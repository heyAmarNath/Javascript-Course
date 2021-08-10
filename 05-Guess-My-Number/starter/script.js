'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Guess!';
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 10;
// document.querySelector('.guess').value = 50;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const updateScore = function (score) {
    document.querySelector('.score').textContent = score;
}
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    //No guess is done
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No number found!';
        displayMessage('⛔ No number found!');

        //Correct Guess
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉Correct Guess!';
        displayMessage('🎉Correct Guess!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#000555';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore)
            highscore = score;
        document.querySelector('.highscore').textContent = highscore;

        //Incorrect Guess
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high' : '📉 Too low';
            displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
            score--;
            // document.querySelector('.score').textContent = score;
            updateScore(score);
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            // document.querySelector('.score').textContent = 0;
            updateScore(0);
        }
    }
    //When the guess is too high
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     //When the guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    // document.querySelector('.score').textContent = score;
    updateScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})