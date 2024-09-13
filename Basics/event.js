//Q.1  create the toggle button for change the screen mode from white to dark.

let toggle = document.createElement('button');
    toggle.innerText = 'Click Me!';

let body = document.querySelector('body');
body.prepend(toggle);
let mode = 'light';
toggle.addEventListener('click',()=>{
    if(mode=='light'){
        // body.style.backgroundColor = 'black';
        // body.style.color = 'White';
        body.setAttribute('class','dark'); // we can do this by changing the class also
        mode='dark';
    }
    else{
        // body.style.backgroundColor = 'White';
        // body.style.color = 'black';
        body.setAttribute('class','white');// we can do this by changing the class also
        mode='light';
    }
    
});
