function proyectar(metadatos:any){

    return (constructor:Function) => {
        constructor.prototype.hacerProyeccion = function ():void{
            if(metadatos.activar){
                console.log("Proyectando la Pelicula: ", this.titulo);
            }else{
                console.log("Cine Cerrado");
            }
        }

        constructor.prototype.agregarASeleccion = function ():void{ 
            let peliculas = metadatos.seleccion;
            peliculas.push(this.titulo);

            return peliculas;
        }
    };
}
    
@proyectar({
        activar: true,
        seleccion:["Superman", "Spiderman","Morbious"]
})

class Pelicula{
    hacerProyeccion: any;        
    agregarASeleccion: any;
    constructor(
        public titulo: string,
        public genero:string,
        public proyectando:boolean
    ){}
}

let batman = new Pelicula("Batman Begins", "Accion", false);
batman.hacerProyeccion();
console.log(batman.agregarASeleccion());








