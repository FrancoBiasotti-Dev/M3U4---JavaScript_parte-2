/*
Crear un documento html con 3 cuadrados que, al ser clickeados, cambien el color de fondo del documento. Cada cuadrado deberá tener un color distinto.
*/


var bodyElemento = document.getElementById('body');

var cuadradoRojo = document.getElementById('cuadrado1');
var cuadradoVerde = document.getElementById('cuadrado2');
var cuadradoAzul = document.getElementById('cuadrado3');


cuadradoRojo.addEventListener('click', function() {
    bodyElemento.style.backgroundColor = 'red';
});

cuadradoVerde.addEventListener('click', function() {
    bodyElemento.style.backgroundColor = 'green';
});

cuadradoAzul.addEventListener('click', function() {
    bodyElemento.style.backgroundColor = 'blue';
});