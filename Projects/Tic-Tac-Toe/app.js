const buttonsBox = document.querySelectorAll('.box');


let playerX = true;
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

buttonsBox.forEach(button => {
    button.addEventListener('click', () => {
        if(playerX){
            console.log('button clicked');
            button.innerHTML = 'X';
            playerX = false;
        }
        else{
            console.log('button clicked');
            button.innerHTML = '0';
            playerX = true;
        }
        button.setAttribute('disabled','');
        checkWinner();
    })
});

const checkWinner = () => {
    
}

