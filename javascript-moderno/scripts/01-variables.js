//EcmaScript 2021 / ES12 / ES.NEXT

// Variables: var, let, const
// Contenedor de Informacion, caja para guardar un dato

var nombre = "Alberto Terrazas";

/*
function mostrarNombre(){
    nombre  = "pepito";
    var apellidos = "Terrazas";
    console.log('Demtro: ', nombre);
    console.log('Dentro: ', apellidos)
}

mostrarNombre();

console.log('Fuera: ', nombre)
console.log('Fuera: ', apellidos)*/

// LET: ambito de bloque

/*let pais = 'España';

console.log(pais);

function mostrarPais(){
    console.log(pais);
}

mostrarPais();

if (pais == 'España'){
    let continente = 'Europa';
    console.log (continente);
}

// console.log('Fuera: ', continente)

for(contador = 0; contador <= 5; contador ++){
    console.log(contador)
}

console.log('CONTADOR: ', contador)*/

// CONST: Crear constantes o variables que su contenido
// no es variable

let edad = 18;
console.log(edad);

edad = 12;
console.log(edad);

const ciudad = 'Madrid';

const fechaNaciemiento = 1978;

console.log (ciudad, fechaNaciemiento);
