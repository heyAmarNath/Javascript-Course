'use strict';

const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');

const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');
const activePlayerElement = document.querySelector('.player--active');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let score, activePlayer, gameOn, currentScore;

const init = function () {
    score = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    gameOn = true;
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');
    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');
    diceElement.classList.add('hidden');
}

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
}

init();

btnRoll.addEventListener('click', function () {
    if (gameOn) {
        const diceValue = Math.trunc(Math.random() * 6) + 1;
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${diceValue}.png`;
        if (diceValue !== 1) {
            currentScore += diceValue;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }

})

btnHold.addEventListener('click', function () {
    if (gameOn) {
        score[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];
    }
    if (score[activePlayer] >= 100) {
        gameOn = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        diceElement.classList.add('hidden');
    } else
        switchPlayer();
})

btnNew.addEventListener('click', init);