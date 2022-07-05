class Coche{


    //public: accesible desde cualquier parte
    //pretoected: desde dentro de la clase y clases hijas
    //privadas: solo desde dentero de esta clase

    public prueba:string;
    

    constructor(
        public marca:string,
        public modelo:string,
        public year:number,
        public color:string,
        protected arrancado:boolean = false,
        protected velocidad:number = 0
    ){
        this.prueba = "intergasdelnorte.com"
    }

    public arrancar():void{
        console.log("Clase Padre");
        this.velocidad = 135;
        this.arrancado = true;
        console.log(this);
        
    }

    public apagar():void{
        this.arrancado = false;

    }
    public acelerar():void{
        this.velocidad += 5;

    }

    private mostrarCoche():string{
        return this.marca + " " + this.modelo;
    }
    private mostrarCualidades():string{
        return this.year + " " + this.color;
    }
    public mostrarTodo():string{
        return this.mostrarCoche() + " " + this.mostrarCualidades();
    }

    public set setColor(color:string){
        this.color = color;
    }

    public get getColor():string{
        return this.color
    }

    static saludar():string{
        return "hola que tal";
    }


}

class Camioneta extends Coche{
    constructor(
        public marca:string,
        public modelo:string,
        public year:number,
        public color:string
    ){
        super(marca, modelo, year, color);
    }

        public arrancar():void{
            console.log("Clase Hija");
            this.velocidad = 200;
            this.arrancado = true;
            console.log(this);
        }

        public mostrar(){
            super.arrancar();
            console.log(this);
            return this.arrancado;
        }
}

let micamioneta = new Camioneta("jeep", "Cherokee", 2022, "Plata");

console.log(micamioneta.mostrar());

let mi_coche = new Coche("Honda", "HRV", 2019, "Rojo");
mi_coche.arrancar();
mi_coche.acelerar();
mi_coche.setColor = "Champange"
mi_coche.getColor;

console.log(mi_coche);

