//JSON.parse(); // transforma o texto JSON em objeto

//JSON. stringify(); // transformar um objeto do JavaScript em JSON


const json = JSON.parse('{"id": 1,"nome": "Notebook Dell","modelo": "Gamer","quantidade": 5}');

const caneta = {
    cor: 'azul',
    formato: 'triangular',
    tipo: 'desenho'
}

console.log(json);

const stringjson = JSON.stringify(caneta);

console.log(stringjson);