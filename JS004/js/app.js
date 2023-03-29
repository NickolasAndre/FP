var quadrado = {
    lado: 4,
    area: function(){
        return this.lado * this.lado
    },
    perimetro: function(){
        return this.lado * this.lado;
    }
};

console.log(quadrado.area());

/*var retangulo = {
    a: 4,
    b: 8,
    area1: function(){
        return this.a * this.b
    },
    perimetro1: function(){
        return(2 * this.a + 2 * this.b);
    }
};

console.log(retangulo.perimetro1());
*/

/*
var retangulo = {
    a: 4,
    b: 8,
    area1(){
        return this.a * this.b
    },
    perimetro1(){
        return(2 * this.a + 2 * this.b);
    }
};

console.log(retangulo.perimetro1());
*/

var retangulo = {
    a: 4,
    b: 8,
    area1(){
        return this.a * this.b
    },
    perimetro1(){
        return(2 * this.a + 2 * this.b);
    }
};

retangulo.a = 2;
retangulo.b = 4;

console.log(retangulo.area1());