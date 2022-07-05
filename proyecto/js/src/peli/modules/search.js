import Storage from "./storage.js";
import List from "./list.js";

export default function(){
    //Crear los Objetos
    const storage = new Storage();
    const list = new List();

    //Conseguir los daros de la s peliculas
    let content = document.querySelector("#content");
    let search_btn = document.querySelector("#search");

    //Aplicar evento al formulario de busqueda
    search_btn.onclick = (e) =>{
        e.preventDefault();
        
        //Conseguir texto introducido en el campo busqueda
        let wanted = document.querySelector("#search_field").value;

        //Conseguir datos de las peliculas Actualizadas
        let pelis_stored = storage.getData();

        //Aplicar Filtro para encontrar pelicula
        const new_pelis = pelis_stored.filter(peli => {
            return peli.title.toLowerCase().includes(wanted.toLowerCase());
        });


        //Mostrar el listado de coincidencias
        
            if(new_pelis.length <= 0){
               content.innerHTML = "<div><h2>No hay conicidencoias</h2></div>";
            }else{
                list.show(new_pelis);
            }            
        
        
    
        console.log(new_pelis);

        return false;
    }



}