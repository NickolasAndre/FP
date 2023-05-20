const menu = document.querySelector('.menu');
const img = document.querySelector('img');
console.log(menu);

console.log(menu.className);
console.log(menu.classList);


menu.classList.add('teste', 'lista');
menu.classList.remove('lista');
menu.classList.toggle('active');
console.log(menu.classList.contains('active'));
menu.classList.replace('teste', 'test');

console.log(img.getAttribute('alt'));

img.setAttribute('alt', 'aqui é outra mensagem');
//img.setAttribute('data-source', 'aqui vai uma mensagem nova');
//img.removeAttribute('alt');
console.log(img.getAttribute('alt'));
