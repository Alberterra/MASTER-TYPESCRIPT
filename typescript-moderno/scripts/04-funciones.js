"use strict";
function saludo(nombre) {
    return "un saludo para " + nombre;
}
console.log(saludo("Alberto Terrazas"));
//Nada / void
function mostrarFecha() {
    console.log("20 - 07 - 2022");
}
mostrarFecha();
//Never / Fin de la Aplicacion
function finApp() {
    throw new Error("La aplicacion se ha cerrado...");
}
//finApp();
//Parametros Funicones
function mostrarPais(pais, continente) {
    let resultado = "faltan datos";
    if (pais && continente) {
        resultado = pais + " " + continente;
    }
    return resultado;
}
console.log(mostrarPais("Mexico", "America"));
// Tipo Function
let grupos;
grupos = function (datos) {
    return "Mis Grupos Favoritos son: " + datos.toString();
};
console.log(grupos(["Bon Jovi", "Metallica", "Guns & Roses"]));
// Tipo Literal
function tekken(personaje, atuendo) {
    return `El personje es ${personaje} y lleva el atuendo ${atuendo}`;
}
console.log(tekken("Tigre", "Especial"));
