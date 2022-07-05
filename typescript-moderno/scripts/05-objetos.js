"use strict";
//Objetos ts
let empresa = {
    nombre: "INTERGAS DEL NORTE",
    sector: "Energia",
    servicios: ["Comercializacion de GAS LP", "Venta de Cilindros", "venta por Autotanque"],
    facturacion: 55000000000,
    mostrar() {
        return this.nombre + " " + this.sector;
    }
};
console.log(empresa.mostrar());
