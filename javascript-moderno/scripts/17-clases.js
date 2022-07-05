//Molde

class Coche {

    #npuertas = 4;
    _nplazas = 5;

    //Metodo que se ejecut aprimero
    constructor(marca,
        modelo,
        color,
        velocidad,
        year
    ) {
        //propiedades o atributos
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidad = velocidad;
        this.year = year;

    }

    //Metodos / acciones o las funcionalidades del objeto
    subirVeloidad() {
        this.velocidad += 1;
    }

    bajarVeloidad() {
        this.velocidad -= 1;
    }

    //Metodos Set y Get (setters y getters)

    set guardarMarca(marca) {
        this.marca = marca;
    }

    get devolverMarca() {
        return this.marca
    }

    //Metodo estatico

    static saludar(nombre) {
        return "Hola " + nombre;
    }

    get numeroPuertas() {
        return this.#npuertas;
    }

    get numeroPlazas() {
        return this._nplazas;
    }

}


let mi_coche = new Coche("Audi", "C-4", "Rojo", 100, 2022);

mi_coche.subirVeloidad();
mi_coche.subirVeloidad();
mi_coche.subirVeloidad();
mi_coche.subirVeloidad();
mi_coche.subirVeloidad();
mi_coche.subirVeloidad();

mi_coche.bajarVeloidad();


mi_coche.guardarMarca = "Toyota";

/*console.log(mi_coche.devolverMarca);

console.log(mi_coche.marca, mi_coche.modelo, mi_coche.velocidad +" Km/h");

console.log (Coche.saludar("Alberto"));

console.log(mi_coche.numeroPlazas);*/

//Herencia

class Quad extends Coche {
    constructor(marca,
        modelo,
        color,
        velocidad,
        year,
        cilindrada){

        super(marca,
            modelo,
            color,
            velocidad,
            year);
        this.cilindros = cilindrada;
    }

    saltar(){
        return "Has saltado una Rampa"
    }

}

let mi_quad = new Quad("Suzuki", "C-45", "Plata", 200, 2030 , 70);

mi_quad.subirVeloidad();
mi_quad.subirVeloidad();
mi_quad.subirVeloidad();
mi_quad.subirVeloidad();
mi_quad.subirVeloidad();

mi_quad.guardarMarca = "Peugeot";
console.log(mi_quad.saltar());

console.log(mi_quad.marca);

