function saludo(nombre:string):string{
    return "un saludo para " + nombre;
}


console.log(saludo("Alberto Terrazas"));


//Nada / void



function mostrarFecha():void{
    console.log ("20 - 07 - 2022");

}

mostrarFecha();


//Never / Fin de la Aplicacion

function finApp():never{
    throw new Error ("La aplicacion se ha cerrado...");
    
}


//finApp();

//Parametros Funicones

function mostrarPais (pais?:string, continente?:string):string{
    let resultado: string  = "faltan datos";

    if (pais && continente){
        resultado = pais + " " + continente;
    }
    return resultado;
}

console.log(mostrarPais("Mexico", "America"));


// Tipo Function

let grupos:(datos:string[]) => string;

grupos = function(datos){
    return "Mis Grupos Favoritos son: " + datos.toString();

}

console.log(grupos(["Bon Jovi", "Metallica", "Guns & Roses"]));

// Tipo Persoanlizado o Alias
//atuendo: "especial" |1|2|3|4
type traje = "Especial" |1|2|3|4 | "Comprado"
// Tipo Literal
function tekken(personaje:string, atuendo: traje):string{
    return`El personje es ${personaje} y lleva el atuendo ${atuendo}`;
}
console.log(tekken("Tigre", "Especial"))


