"use strict";
let personas = ["Victor", "Paco", "Fran"];
personas.push("David");
console.log(personas);
let years = [2019, 2020, 2021];
years.push(2022);
console.log(years);
//Tuplas
let pelicula = ["Batman Begins", true, 1990];
console.log(pelicula.length);
// Enum - enumeracion
var DatosPersonales;
(function (DatosPersonales) {
    DatosPersonales["nombre"] = "Alberto";
    DatosPersonales[DatosPersonales["dni"] = 13516332665] = "dni";
    DatosPersonales["direccion"] = "Calle de los cactus #661 Col. Santa FE";
    DatosPersonales["ciudad"] = "Torreon";
})(DatosPersonales || (DatosPersonales = {}));
;
console.log(DatosPersonales.nombre, DatosPersonales.dni, DatosPersonales.direccion, DatosPersonales.ciudad);
//Const o convrtit a otro tipo
let valor_desconocido = "Esto viene de Peticion ajax";
let frase_final = valor_desconocido;
console.log(frase_final);
