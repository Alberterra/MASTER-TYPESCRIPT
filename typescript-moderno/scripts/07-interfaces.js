"use strict";
;
//Clase
class Fifa {
    constructor(titulo, categoria, edad, duracion, lazado) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.edad = edad;
        this.duracion = duracion;
        this.lazado = lazado;
    }
    mostrar() {
        console.log(this.titulo, this.categoria, this.edad, this.duracion, this.lazado);
    }
    actualizar(consola) {
        console.log("Buscando Actualizaciones...");
        return "Actualizado";
    }
}
let fifa23 = new Fifa("Fifa 23", "Futbol", 5, 25, true);
console.log(fifa23.mostrar());
//Interface Objeto Literal
let gta = {
    titulo: "GTA-5",
    categoria: "Accion",
    edad: 18,
    mostrar() {
        console.log(this.titulo, this.categoria, this.edad);
    },
    actualizar(consola) {
        console.log("Buscando Actualizaciones...");
        return "Actualizado";
    }
};
console.log(gta);
