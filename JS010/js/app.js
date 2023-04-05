let link = document.createElement('a');

link.setAttribute('href', 'https://github.com/NickolasAndre');

let conteudo = document.createTextNode('Acessar o GitHub');

link.appendChild(conteudo);

let container = document.querySelector('#app');

container.appendChild(link);