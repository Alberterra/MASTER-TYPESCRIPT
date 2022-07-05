let personas = ["victor", "paco", "pepe", "juan", "antonio"];


// Busca en un array - find
let busqueda = personas.find(persona => persona === "pepe");
console.log(busqueda);

//Buscar en un array - findIndex
let buscaindex = personas.findIndex(persona => persona === "juan")
console.log(buscaindex);

// Crear array basandome en un objeto iterable .from
let array_letras = Array.from("victorroblesweb.es")
console.log(array_letras);

let array_numeros_cuadrado = Array.from([1,2,3,4,5,6], numero => Math.pow(numero, 2));
console.log(array_numeros_cuadrado);

//Comprobar si existe un elemento dentro de un array
console.log(personas.includes("Victor Robles"));

//Filtrar arrays - filter
let nuevas_personas = personas.filter(persona => persona.includes("a"));
console.log(nuevas_personas);


