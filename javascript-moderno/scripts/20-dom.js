//seleccionar elementos con ID
//Seleccionar elementdos con CLASE

// let contenedor = document.getElementById("contenedor");
let contenedores = document.querySelectorAll(".container");

//contenedores.forEach((elemento, indice) => {
for (indice in contenedores) {

    contenedores[indice].innerText = `Autor: Alberto Terrazas Rodriguez ${indice}`;
    contenedores[indice].className = "ficha";

    if (parseInt(indice) === 2) {
        contenedores[indice].style.backgroundColor = "Orange";
    }
}
console.log(contenedores);
