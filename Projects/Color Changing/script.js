
function changeBackgroundColor() {
    const hex = '0123456789ABCDEF'
    let backgroundColor = '#';
    for (let i = 1; i < 7; i++) {
        const randmNumber = Math.floor(Math.random() * 16)
        backgroundColor += hex[randmNumber];
    }
    return backgroundColor;
}

function changeFontColor() {
    const hex = '0123456789ABCDEF'
    let fontColor = '#';
    for (let i = 1; i < 7; i++) {
        const randmNumber = Math.floor(Math.random() * 16)
        fontColor += hex[randmNumber];
    }
    return fontColor;
}

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
let intervalId;

startButton.addEventListener('click', function () {
    intervalId = setInterval(function () {
        document.body.style.backgroundColor = changeBackgroundColor();
        document.body.style.color = changeFontColor();
    }, 1000)
});

stopButton.addEventListener('click', function () {
    clearInterval(intervalId);
});