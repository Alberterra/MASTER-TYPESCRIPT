let nombres = [
    "Victor",
    "Paco",
    "Pepe",
    "Juan"
];
/*//console.log(nombres);

//Bucle Clasico
for(i =0; i<nombres.length; i++){
    console.log(nombres[i]);
}

//for of (accede al contenido)
for (nombre of nombres){
    console.log(nombre);
}

//for in (accede al indice) -- Recorrer un JSon
for(indice in nombre){
    console.log(indice, nombres[indice]);
}

// forEach
nombres.forEach(function(nombre_actual, indice){
    console.log(indice, nombre_actual);
});

//flechas
nombres.forEach(nombre_actual => console.log(nombre_actual));*/

//Iterables
const mi_iterable1 = nombres[Symbol.iterator]();

//Recorrer String
let sitioweb = "www.intergasdelnorte.com";

for (let letra of sitioweb){
    //console.log(letra);

}

const mi_iterable = nombres[Symbol.iterator]();
// console.log(typeof mi_iterable, mi_iterable)

console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());

//JSON

let fruta = {
    nombre: "Manzana",
    color: "Verde",
    temporada: "invierno"
};

fruta[Symbol.iterator] = function(){
    let indice = 0;
    let valores = Object.values(this);

    return {
        next(){
            if(indice >= valores.length){
                return{
                    done: true,
                    value: undefined
                };
            }

            return{
                done: false,
                value: valores[indice++]
            }

        }
    };

}

for(let propiedad of fruta){
    console.log(propiedad);
}


for(let propiedad in fruta){
    console.log(propiedad, fruta[propiedad] )
}



