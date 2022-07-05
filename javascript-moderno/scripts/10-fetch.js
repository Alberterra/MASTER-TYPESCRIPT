window.addEventListener("DOMContentLoaded", event => {
    console.log(event);


    let caja = document.querySelector("#contenedor");
    caja.innerHTML = "Cargando...";

    // Peticion ajax moderna
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(items => {

            console.log(items);
            
            caja.innerHTML = "";
            monstrar(caja, items);

        })
        .catch(error => {
            console.log("La peticion ha fallado");
        })

        ;

    // DOM
    function monstrar(contenedor, elementos) {


        elementos.forEach(elemento => {
            let muestrame = `
                <article>
                    <h2>${elemento.title}</h2>
                    <p>${elemento.body}</p>
                </article>
                <hr/>
            `;
            contenedor.innerHTML += muestrame;
        });


        return elementos;

    }
});
