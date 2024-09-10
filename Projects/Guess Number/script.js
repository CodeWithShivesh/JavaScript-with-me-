// console.log("Number Gussing Game");

// let randmNumber = parseInt((Math.random() * 100) + 1);
// console.log(`random number: ${randmNumber}`);
const input = document.querySelector("#guessField");
const previousValue = document.querySelector('.guesses');

const submit = document.getElementById('subt');
const message = document.querySelector('.lowOrHi');

let game = true;
const msg = document.createElement('h2');
let preVal = [];

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
    previousValue.innerHTML = + `${Guess}  `;


}
