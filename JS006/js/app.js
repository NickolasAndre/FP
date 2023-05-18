//let marcas = ['VW', 'Fiat', 'Renault', 'Ferrari', 'Audi'];

/*
marcas.forEach(function(item, index, array){ // pode colocar outros nomes (a, b, c)

//item = são os valores vw, fiat, renault
//index = é o indice dos valores vw=0, fiat=1, renault=2
//array

    console.log(item);
    
})
*/

/*

marcas.forEach((item) => {
    console.log(item);

})
*/

/*
marcas.forEach((item) => console.log(item))
//esse jeito só vai funcionar se o console.log estive em só uma lina
*/

/*
marcas.forEach((item) => {
    item = 'Marca: ' + item;
    console.log(item.toUpperCase());
})
*/

let marcas = ['VW', 'Fiat', 'Renault', 'Ferrari', 'Audi'];
let carros = ['Polo', 'Argo', 'Kwid', 'La Ferrari', 'A3'];

const carrosMarca = marcas.map((item, index) => {
    return item + ': ' + carros[index];
});
carrosMarca.forEach((item) => console.log(item))