/*let frutas = ['maçã', 'uva', 'banana', 'laranja'];

console.log(frutas[2]);
*/

let frutas = ['maçã', 'uva', 'mamão', 'laranja', 'kiwi']; 
//let frutas = ['maçã', 'uva', 'mamão', 'laranja', ['nanica', 'prata']];

//console.log(frutas[4][1]);

console.log(frutas.pop());
console.log(frutas.push('kiwi'));
console.log(frutas);
console.log(frutas.length);

/*
for(let i = 1; i <= 12; i++){ //i++ => i = i + 1
    console.log(i);
} 
*/


for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}


/*let i = 1;

while(i <= 12){

    console.log(i);

    i++;
}*/

/*
let i = 0;

while(i <= 4){
    console.log(i + ': ' + frutas[i]);
    i++;
}
*/