//SPREAD ...
let heroes = ["Batman", "Spiderman", "Superman","Venom", "Aquemana"];

console.log(...heroes);

function mostrarHeroes(heroe1, heroe2){
    console.log(`**** MIS DOS HEROES FAVORITOS ***
                    - ${heroe1}
                    - ${heroe2}
                fin.
    `);
}

mostrarHeroes(...heroes);

let superheroes = ["flash", "catwomn", ...heroes];

console.log(superheroes);

//REST

function peliculas (pelicula1, pelicula2, ...restoDePeliculas){
    console.log(pelicula1);
    console.log(pelicula2);
    for(pelicula of restoDePeliculas){
        console.log(pelicula);
    }
    
}

peliculas("El señor de los Anillos", 
            "Fast and Furious",
            "Batman Vs Superman",
            "Gran Torino",
            "Sin Limites");

