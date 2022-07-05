// Separadores Numericos
let numero = 4_000_000;
console.log(typeof numero, numero);

//Replace y ReplaceAll
let frase = "Voy en mi moto contento mo.to!!/ moto por la carretera y veo otra moto";
// let nueva_frase = frase.replace(/moto/g, "coche");
let nueva_frase = frase.replaceAll("mo.to!!/", "coche");
console.log(nueva_frase);


//Asigandores Logicos

let nombre = null;
let edad = 43;

nombre ??= edad;


nombre *= 2;

console.log(nombre);