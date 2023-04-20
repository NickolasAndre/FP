

var xhr = new XMLHttpRequest(); // Instanciando uma classe


xhr.open('GET', 'https://api.github.com/users/NickolasAndre');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText))
    }
}