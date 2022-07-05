
/*
//string
let nombre = "Alberto Terrazas";

//Number
let numero = 14;
let decimal = 3.2;

//Boolean / Booleano

let mayor_edad = true;
let menor_edad = Boolean(0); // 1 es true, 0 es false

// Array
let paises = ['España','Mexico','Argentina'];

// NULL
let vacio = null;

//Undefined
let no_definido = undefined;

console.log(typeof nombre,
    typeof numero,
    typeof decimal,
    typeof mayor_edad,
    typeof menor_edad,
    typeof paises,
    typeof (paises[1]),
    typeof vacio,
    typeof no_definido


    
    );*/




//JSON - JavaScript Object Notation - Objetos Literales
/* estructura
let pelicula = {
    clave:valor,
    clave:valor,
    clave:valor,
    clave:valor,
}*/

let pelicula = {
    titulo: "Space Jam",
    genero: "Animacion",
    anio: 1996,
    director: "Tarantino",
    mostrar: function(){
        return `
            **** LA PELICULA DE LA SEMANA **** \n
            Titulo: ${this.titulo} \n 
            Genero: ${this.genero} \n
            Año: ${this.anio} \n
            Director: ${this.director}
        `;

    }
};

pelicula["pais"] = "Estados Unidos";
delete pelicula.director;
//delete pelicula.anio;
pelicula.genero = null;

console.log("anio" in pelicula);

for (let propiedad in pelicula){
    let dato_actual = pelicula[propiedad];
    if(dato_actual !== null && typeof(dato_actual) !== "function" )
    {console.log(pelicula[propiedad]);
    }
}


// symbol

let animal = Symbol("tigre");
let animal2 = Symbol("tigre");

let user = {
    id: 1,
    nombre: "Alberto",
    web: "www.intergas.com"
}


let supercalifragilistico = Symbol('id');
user[supercalifragilistico] = 7

console.log(user.id, user[supercalifragilistico]);







  
 