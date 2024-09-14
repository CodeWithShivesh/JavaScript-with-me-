const buttonsBox = document.querySelectorAll('.box');
const msgBox = document.querySelector('.msg-container');
const msg = document.querySelector('#msg');
const resetBtn = document.querySelector('#reset-btn')
const newGameBtn = document.querySelector('#new-btn')


let playerX = true;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


buttonsBox.forEach(button => {
    button.addEventListener('click', () => {
        if (playerX) {
            button.innerHTML = 'X';
            playerX = false;
        }
        else {
            button.innerHTML = '0';
            playerX = true;
        }
        button.setAttribute('disabled', '');
        checkWinner();
    })
});

const newGame = () => {
    resetGame();
    msgBox.classList.add('hide');
}

newGameBtn.addEventListener('click', newGame);

const resetGame = () => {
    for (let box of buttonsBox) {
        box.innerHTML = '';
        box.removeAttribute('disabled', '');
    }
    playerX = true;
}

resetBtn.addEventListener('click', resetGame);

const disableAllBtns = () => {
    for (let box of buttonsBox) {
        box.setAttribute('disabled', '');
    }
}

const showWinner = (winner) => {
    disableAllBtns();
    msgBox.classList.remove('hide');
    msg.innerHTML = `Congratulations! Winner is ${winner}`
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let position1 = buttonsBox[pattern[0]].innerText;
        let position2 = buttonsBox[pattern[1]].innerText;
        let position3 = buttonsBox[pattern[2]].innerText;
        if (position1 != '' && position2 != '' && position3 != '') {
            if (position1 === position2 && position2 === position3) {
                console.log('winner', position1);
                showWinner(position1);
                game = false;
            }
        }
    }
}

