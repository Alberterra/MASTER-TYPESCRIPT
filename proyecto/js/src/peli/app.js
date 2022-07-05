import Add from "./modules/add.js";
import List from "./modules/list.js";
import Storage from "./modules/storage.js"; 
import Search from "./modules/search.js";

export default class App{

    constructor(){
        //Inicializar Propiedades
        this.add = new Add();
        this.list = new List();
        this.storage = new Storage();
    }

    load(){
        //Añadir Peliculas
        this.add.peliSave();

        //Comseguir array de objetos del LocalStorage
        const pelis = this.storage.getData();
        console.log(pelis);

        //Listar Peliculas
        this.list.show(pelis);

        //Buscar Peliculas
        Search();
        console.log("La Aplicacion de Peliculas a sido inicializada...");

    }
}