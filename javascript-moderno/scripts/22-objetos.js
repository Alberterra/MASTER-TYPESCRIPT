let titulo = "El señor de los Anillos";
let genero = "Accion";
let duracion ="2 Horas";

const pelicula = {
    titulo,
    genero,
    duracion,
    [genero+"2022"]: "hola",
    mostrar (){
        return this.titulo + " " + this.genero;
    }

};

/*console.log(pelicula.mostrar());*/
console.log(Object.values(pelicula));
Object.entries(pelicula).forEach(([clave,valor]) => console.log(clave, valor));