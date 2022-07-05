// Operador Ternario
let persona = ["Alberto Terrazas", 16];

//Condicion Clasica
if(persona[1] >= 18){
    console.log("Es Mayor de Edad");
}else{
    console.log("Es Menor de Edad");
}

//Operacor Ternario
let edad = (persona[1] >= 18) ? "Es Mayor de Edad" : "Es Menor de Edad";
console.log(edad)

let existe = persona ? "Existe" : "No Existe";
console.log(existe)

// Diferencia entre == y === y != y !==

let edad1 = 80;
let edad2 = "80";

if(edad1 !== edad2){
    console.log("Edades Distintas");
}else{
    console.log("Edades Iguales");
}

