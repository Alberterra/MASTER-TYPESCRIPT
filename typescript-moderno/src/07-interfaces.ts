interface Videojuego{
    titulo: string;
    categoria: string;
    edad:number;
    duracion?:number; 
    lanzado?:boolean;
    mostrar():void;
    actualizar(consola:string):string;
    };

    //Clase
    class Fifa implements Videojuego{
        constructor(
            public titulo:string, 
            public categoria:string,
            public edad:number, 
            public duracion?:number, 
            public  lazado?:boolean,
            
            ){}
            mostrar():void{
                console.log(this.titulo, this.categoria, this.edad, this.duracion, this.lazado);
            }
    
            actualizar(consola:string):string{
                console.log("Buscando Actualizaciones...");
                return "Actualizado";
            }
    }

    let fifa23:Videojuego = new Fifa("Fifa 23", "Futbol", 5, 25, true);
    console.log(fifa23.mostrar());


    //Interface Objeto Literal

    let gta:Videojuego = {
        titulo: "GTA-5",
        categoria: "Accion",
        edad: 18,
        
        mostrar():void{
            console.log(this.titulo, this.categoria, this.edad);
        },

        actualizar(consola){
            console.log("Buscando Actualizaciones...");
            return "Actualizado";
        }
    };


    console.log(gta);