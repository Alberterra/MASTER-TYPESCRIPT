import Storage from "./storage.js";
import List from "./list.js";

export default function(){
    //Crear los Objetos
    const storage = new Storage();
    const list = new List();

    //Conseguir datos de las peliculas
    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll(".peli-item");
    
    //Recorrer Peliculas Mostradas
    pelis_viewed.forEach(peli =>{
        //Seleccionar el Boton Editar
        let edit_btn = peli.querySelector(".edit");

        //Asigna un evento al Boton
        edit_btn.onclick = function(){

            //Conseguir id de la pelicula a edita
            const peli_id = parseInt(this.getAttribute("data-id"));

            //Eliminar los Botones Antiguos
            edit_btn.remove();
            peli.querySelector(".delete").remove();

            //Añadir un trozo de html debajo de los botones
            let peli_edit_html = `
                <div class="edit_form">
                    <h3 class="title">Editar Pelicula</h3>
                    <form>
                        <input type="text" class="edited_title" value="${peli.querySelector(".title").innerHTML}"/>
                        <textarea class="edited_description">${peli.querySelector(".description").innerHTML}</textarea>
                        <input type="submit" class="update" value="Actualizar" />
                    </form>

                </div>
            `;

            peli.innerHTML += peli_edit_html;

            //Seleccionar el Boton Actualizar
            let update_btn = peli.querySelector(".update");

            //Aplicar evento al clic
            update_btn.onclick = function(e){
                e.preventDefault();

                //Buscar el indice de la pelicula a Actualizar
                let index = pelis_stored.findIndex(peli => peli.id === peli_id);
                
                

                //Guardar el objeto dentro de ese indice
                pelis_stored[index] = {
                    id: peli_id,
                    title: peli.querySelector('.edited_title').value,
                    desciption: peli.querySelector('.edited_description').value
                    
                };

            console.log(pelis_stored);

                //Actualizar Localstorage
                storage.save(pelis_stored);

                //Volver a Mostrar el Listado                
                list.show(pelis_stored);

                return false;
            }

            
        }


    });




    
        
}