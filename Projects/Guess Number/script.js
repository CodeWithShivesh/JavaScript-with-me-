// console.log("Number Gussing Game");


const input = document.querySelector("#guessField");
const previousValue = document.querySelector('.guesses');
const submit = document.getElementById('subt');
const message = document.querySelector('.lowOrHi');
const count = document.querySelector('.lastResult');
const warning = document.querySelector('#warning');
const result = document.querySelector('.resultParas')
const form = document.querySelector('.form')

let game = true;
let win = false;
const msg = document.createElement('h2');
let preVal = [];
let num = 10;
const button = document.createElement('button');
button.innerHTML = 'Start Again ✊';
button.style.marginTop = '5px';
button.style.backgroundColor = 'Green'



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
        win = true;
        displayMessage('Hooray!! You Won 🎉🎉', Guess, win);
        endGame(win);
    } else {
        if (Guess > randmNumber) {
            displayMessage('Your Number is TOO High', Guess, win);
        } else {
            displayMessage('Your Number is TOO Small', Guess, win);
        }
    }
}

function displayMessage(msg, Guess, win) {
    if (win) message.style.color = 'green';
    message.innerHTML = `<h2>${msg}</h2>`
    previousValue.innerHTML += `${Guess}  `;
    num -= 1;
    count.innerHTML = num;
    if (num < 1) endGame();
}

function endGame(win = false) {
    if (win) {
        game = false;
        input.setAttribute('disabled', '');
        submit.remove();
        form.appendChild(button);
    }
    else {
        game = false;
        input.setAttribute('disabled', '');
        submit.remove();
        form.appendChild(button);
        message.innerHTML = `<h2>You Lost!!</h2>`
        warning.style.color = 'red';
        count.style.color = 'red';
    }
    message.style.margin = '5px';
    // result.appendChild(button);
    // }
}
