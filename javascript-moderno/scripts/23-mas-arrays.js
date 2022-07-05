let personas = ["victor", "paco", "pepe", "juan", "antonio"];
let paises = [
    {    
    nombre: "España",
    continente: "Europa"
},

{    
    nombre: "Francia",
    continente: "Europa"
},
{    
    nombre: "Italia",
    continente: "Europa"
}];

// Some
let existeAlguno = personas.some(nombre => nombre === "Alberto");
console.log(existeAlguno);

//Every
let esIgualEnTodos = paises.every(pais => pais.continente === "Europa");
console.log(esIgualEnTodos);

//Map
let nuevas_personas = personas.map(persona => {
    let nueva = persona + "hola";
    console.log(nueva);
    return nueva;

});
console.log(nuevas_personas);


//Reduce
console.log(personas.reduce((acumulador, actual) => {
    let valor_actual = ", "+actual;
    return acumulador+valor_actual;
} ))

