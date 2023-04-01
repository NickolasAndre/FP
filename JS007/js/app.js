/*
const li = document.querySelectorAll('li');

li.forEach((item) => {
    item.classList.add('item');
})
*/

/*
const numeros = [2, 4, 6, 8, 10];

const numerox2 = numeros.map(n => n * 2);

console.log(numerox2);
*/


const produtos = [
    {
        nome: 'teclado',
        preco: 400,
    },
    {
        nome: 'mouse',
        preco: 200,
    },
    {
        nome: 'webcam',
        preco: 1000,
    },
    {
        nome: 'controle',
        preco: 400,
    }
]

let total = 0;

produtos.map(item => total += item.preco);

console.log('total: ' + total)
