/*let frutas = ["Manzana", " Pera", "Naranja", "Sandia"];

//let manzana = frutas[0];
// let pera = frutas[1];

//console.log(manzana);

//Desestructuracion array

let[manzana, pera, naranja, sandia] = frutas;

console.log(naranja);


// Desestructurar Objetos
let persona = {
    nombre: "Victor",
    edad: 80,
    altura: 180,
    pais: "España"
};

let {nombre, edad, altura, pais} = persona;*/


//Desestructurar String
let usuario = "ALBERTO TERRAZAS WEB TERA780717JW7 07/17/1978 TORREON";
let [nombre, apellidos1, apellido2, dni, fecha,ciudad] = usuario.split(" ");


//crear varias variables
let lenguaje = "JS", framwork = "Angular", editor = "VSC";



// utilidad paramentros funciones

function mostrarUsuario ({nombre = "", apellido = "", ciudad = "Barcelona"}){
    console.log(nombre + " " + apellido + " " +  ciudad);
}

mostrarUsuario({apellido: "Terrazas", ciuadad:"Salamanca"});