import List from "./list.js";
import Storage from "./storage.js";
export default function(){

    //Crear Objetos
    const storage = new Storage();
    const list = new List();
    
    //Datos de las peliculas disponibles
    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll("#content .peli-item");

    //Recorrer peliculas Mostradas
    pelis_viewed.forEach(peli => {
        
        //Capturar el Boton
        let delete_btn = peli.querySelector('.delete');
        //aplicarle un evento
       delete_btn.onclick = function() {
        //conseguir el id de la pelicula que quiero borrar
            const peli_id = this.getAttribute('data-id');
            //Filtrar el array para que elimine la que no quiero
            const new_pelis_stored = pelis_stored.filter((peli) =>peli.id !== parseInt(peli_id));

            //actualizar datos en Localstorege
            storage.save(new_pelis_stored);
            //Volver a mostrar la lista actualizada
            list.show(new_pelis_stored);
       }
    });
}