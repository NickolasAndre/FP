
let box = document.querySelector('.box');

//console.log(box.clientHeight); //clientwidth

//console.log(box.offsetTop);

//console.log(box.offsetLeft);

//console.log(window.innerWidth);

//console.log(window.outerWidth);

//console.log(window.pageYOffset);

const media = window.matchMedia('(max-width: 740px)');

if(media.matches){
    console.log('tamanho mobile');
}
else{
    console.log('tamanho pc');
}