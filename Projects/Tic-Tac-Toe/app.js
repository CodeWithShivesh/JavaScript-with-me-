const buttonsBox = document.querySelectorAll('.box');


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

const checkWinner = () => {
    for (let pattern of winPattern) {
        let position1 = buttonsBox[pattern[0]].innerText;
        let position2 = buttonsBox[pattern[1]].innerText;
        let position3 = buttonsBox[pattern[2]].innerText;
        if(position1 != '' && position2 != '' && position3 != ''){
            if(position1 == position2 && position2 == position3){
                console.log(position1, position2, position3);
                console.log('winner');
                
            }
        }
    }
}

