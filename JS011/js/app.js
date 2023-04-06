let link = document.createElement('a');

link.setAttribute('href', 'https://github.com/NickolasAndre');

let conteudo = document.createTextNode('Acessar o GitHub');

link.appendChild(conteudo);

let container = document.querySelector('#app');

container.appendChild(link);



link.style.textDecoration = 'none';
link.style.color = 'red';

let box = document.querySelector('.box');
box.style.width = '200px';
box.style.height = '200px';
box.style.backgroundColor = 'black';