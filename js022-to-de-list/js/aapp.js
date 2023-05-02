
var listElement = document.querySelector('.list');
var textElement = document.querySelector('input');
var buttonElement = document.querySelector('button');

var arr = [
    'Fazer um café',
    'Ver aulas do FrontPUSH de JS',
    'Tentar executar sozinho',
];

console.log(arr.length)

function renderTodo(){
/*
    for(var i = 0; i < arr.length; i++){
        console.log(i)
    }
*/
    arr.forEach((item) => {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(item);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    })
}

renderTodo();
