// console.log("Number Gussing Game");


const input = document.querySelector("#guessField");
const previousValue = document.querySelector('.guesses');
const submit = document.getElementById('subt');
const message = document.querySelector('.lowOrHi');
const count = document.querySelector('.lastResult');
const warning = document.querySelector('warning');

let game = true;
const msg = document.createElement('h2');
let preVal = [];
let num = 10;


if (game) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(input.value)
        preVal.push(guess)
        input.value = '';
        const randmNumber = parseInt((Math.random() * 100) + 1);
        checkGuess(guess, randmNumber)
    })
}

function checkGuess(Guess, randmNumber) {
    if (isNaN(Guess)) {
        alert("Enter valid number!!");
    } else if (Guess > 100) {
        alert("Entered number is greter than 100");
    } else if (Guess < 1) {
        alert("Entered number is less than 1");
    } else {
        validateGuess(Guess, randmNumber);
    }
}

function validateGuess(Guess, randmNumber) {
    if (Guess == randmNumber) {
        displayMessage('You win😎', Guess);
    } else {
        if (Guess > randmNumber) {
            displayMessage('Your Number is TOO High', Guess);
        } else {
            displayMessage('Your Number is TOO Small', Guess);
        }
    }
}

function displayMessage(msg, Guess) {
    message.innerHTML = `<h2>${msg}</h2>`
    previousValue.innerHTML += `${Guess}  `;
    num -= 1;
    count.innerHTML = num;
    if (num < 1) endGame();
}

function endGame() {
    if (num < 1) {
        game = false;
        input.setAttribute('disabled', '');
        message.innerHTML = `<h2>You lost all the chance !!</h2>`
        warning.style.color = 'red';

    }
}

function startGame() {
    if (game) {
        submit.addEventListener('click', function (e) {
            e.preventDefault()
            const guess = parseInt(input.value)
            preVal.push(guess)
            input.value = '';
            const randmNumber = parseInt((Math.random() * 100) + 1);
            checkGuess(guess, randmNumber)
        })
    }
}
