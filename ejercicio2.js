/*
Programar un contador de caracteres para un textarea.
*/

var miTexto = document.getElementById('miTexto');

var contador = document.getElementById('contador');

miTexto.addEventListener("keyup", function(){
    var caracteres = miTexto.value.split('');
    contador.innerText = caracteres.length;
});