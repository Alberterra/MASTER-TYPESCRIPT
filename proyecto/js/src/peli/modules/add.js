import Storage from "./storage.js";
import List from "./list.js";


export default class Add{

    constructor(){
        //Crear Objetos
        this.storage = new Storage();
        this.list = new List();

        //Conseguir Elementos del DOM a utilizar
        this.title_field = document.querySelector("#title");
        this.description_field = document.querySelector("#description");
        this.save_btn = document.querySelector("#save");
    }

    peliSave(){

        this.save_btn.onclick = (e) => {
            e.preventDefault();
                      

            //Conseguir Datos Actualizados
            let pelis = this.storage.getData();
            let lastId = this.storage.getLastId();

            console.log(pelis,lastId);
            //Datos a Guardar
            let title = this.title_field.value;
            let description = this.description_field.value;


            //Pequeña Validadcion
        if(title != "" || description != ""){
             //Crear Objeto a Guardar
             let peli = {
                id: lastId++,
                title,
                description
            }
            // Añadir al array de Objetos
            pelis.push(peli);

           //Guardar en el Localstorage
           this.storage.save(pelis);
            //Actualizar el Listado
            //this.list.addToList(peli, pelis);
            this.list.show(pelis);
        }else{
            alert("Introduce bien los datos en el Formulario!!!");
           
        }

            console.log("Acabas de enviar el formulario de add", title, description);
            return false;
    }
    }

        
}