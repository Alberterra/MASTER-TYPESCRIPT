"use strict";
class Coche {
    constructor(marca, modelo, year, color, arrancado = false, velocidad = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.arrancado = arrancado;
        this.velocidad = velocidad;
        this.prueba = "intergasdelnorte.com";
    }
    arrancar() {
        console.log("Clase Padre");
        this.velocidad = 135;
        this.arrancado = true;
        console.log(this);
    }
    apagar() {
        this.arrancado = false;
    }
    acelerar() {
        this.velocidad += 5;
    }
    mostrarCoche() {
        return this.marca + " " + this.modelo;
    }
    mostrarCualidades() {
        return this.year + " " + this.color;
    }
    mostrarTodo() {
        return this.mostrarCoche() + " " + this.mostrarCualidades();
    }
    set setColor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
    static saludar() {
        return "hola que tal";
    }
}
class Camioneta extends Coche {
    constructor(marca, modelo, year, color) {
        super(marca, modelo, year, color);
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
    }
    arrancar() {
        console.log("Clase Hija");
        this.velocidad = 200;
        this.arrancado = true;
        console.log(this);
    }
    mostrar() {
        super.arrancar();
        console.log(this);
        return this.arrancado;
    }
}
let micamioneta = new Camioneta("jeep", "Cherokee", 2022, "Plata");
console.log(micamioneta.mostrar());
let mi_coche = new Coche("Honda", "HRV", 2019, "Rojo");
mi_coche.arrancar();
mi_coche.acelerar();
mi_coche.setColor = "Champange";
mi_coche.getColor;
console.log(mi_coche);
