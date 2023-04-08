let box = document.querySelector('.box');
//h1
/*
function callback(evento){
    box.classList.toggle('reed'); //this.classList
    //console.log(evento.currentTarget);
}

box.addEventListener('click', callback);
//h1
*/

function callback(evento){
    if(evento.key == 'r'){
        box.classList.toggle('red');
    }
    else if(evento.key == 'b'){
        box.classList.toggle('blue');
    }
    else{
        box.classList.toggle('green');
    }
}

window.document.addEventListener('keydown', callback);