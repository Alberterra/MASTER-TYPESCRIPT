// Parametros por defecto
function saludo (persona, year){
    
    console.log("Hola te Mando un saludo " + persona + " Estamos a: " + year);
}

saludo ("Alberto", 2022);

//funciones flecha

let saludo2 = function(nombre){
    return "Hola te mando un saludo " + nombre;
}

console.log (saludo2("Pedro"));

let saludo3 = nombre => "Hola te mando un saludo " + nombre;

console.log (saludo3("Juan"));


let saludo4 = (nombre, pais) => "Hola te mando un saludo " + nombre + " de " + pais; 
console.log (saludo4("Juan", "España"));

let saludo5 = (nombre, pais) => {
    let continente = "Europa";
    if(pais !== "España"){
        continente = "Otro";
    }
    return "Hola te mando un saludo " + nombre + " de " + pais + " y el continente es: " + continente; 

};
console.log (saludo5("Juan Pedro", "Brasil"))


function multiplicacion(n1, n2){
    console.log (n1*n2);

}

multiplicacion(2,3);

let multimplicacion2 = (n1, n2) => console.log(n1*n2);

multimplicacion2 (6,8);

//JSON

let tienda = {
    nombre: "GAME",
    videojuegos: ["GTA", "WWE", "FIFA"],
    mostrar: function(){
        console.log(this.nombre);
    },
    mostrar2(){
        this.videojuegos.forEach(juego => {
            console.log(juego)
            if(juego === "GTA"){
                console.log("El mejor juego de la historia: ");
            }
            console.log(juego);
        });
    },
    mostrar3: ()=>{
        console.log(tienda.nombre);
    }
};

tienda.mostrar2();

