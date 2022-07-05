let personas:string[] = ["Victor", "Paco", "Fran"];

personas.push("David");

console.log(personas);


let years:number[] = [2019,2020,2021];

years.push(2022)

console.log(years);


//Tuplas

let pelicula:[string, boolean, number] = ["Batman Begins", true, 1990];


console.log(pelicula.length)

// Enum - enumeracion
enum DatosPersonales {
    nombre = "Alberto",
    dni = 13516332665,
    direccion = "Calle de los cactus #661 Col. Santa FE",
    ciudad = "Torreon"
};


console.log(DatosPersonales.nombre, DatosPersonales.dni, DatosPersonales.direccion, DatosPersonales.ciudad);

//Const o convrtit a otro tipo

let valor_desconocido:any = "Esto viene de Peticion ajax";
let frase_final:string = <string>valor_desconocido;

console.log(frase_final);
