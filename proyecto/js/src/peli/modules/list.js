import deleteOfList from "./delete.js";
import edit from "./edit.js";


export default class List{

    constructor(){
        //Seleccionar elementos del DOM a Usar
        this.content = document.querySelector("#content");
    }

    peliTemplate(peli){
        return `<article class="peli-item id="peli-${peli.id}">
        <h3 class="title">${peli.title}</h3>
        <p class="description">${peli.description}</p>

        <button class="edit" data-id="${peli.id}">Editar</button>
        <button class="delete" data-id="${peli.id}">Borrar</button>
        </article>`;
    }

   show(pelis){
        //Vaciar DOM del Contenedor Principal
        this.content.innerHTML ="";

        //Recorrer y Mostrar todos los Objetos / Peliculas de LocalStorage
        pelis.forEach(peli =>{
            this.content.innerHTML += this.peliTemplate(peli);
        });

        //funcionalidad Botones de Borrado
        
        deleteOfList();

        // Funcionalidad Botodnes de Edicion
        edit();        
    }
}

