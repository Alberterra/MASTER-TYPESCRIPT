// cOMPROBAR SI EL NAVEGADOR ES COMPATIBLE

if(typeof (Storage) == "undefined"){
    window.location.href = "http://intergasdelnorte.com";
}

//Guardar Datos en el Navegador
localStorage.setItem("nombre1", "Alberto Terrazas");
localStorage.setItem("nombre2", "Victor Robles");
localStorage.setItem("nombre3", "Juan Perez");


// Recuperar datos del Almacenamiento local
let datos = document.querySelector("#datos");
datos.innerHTML = `<p id= nombre1> Nombre 1: ${localStorage.getItem("nombre1")}  <button>Borrar</button> </p> <br>`;
datos.innerHTML += `<p id= nombre2> Nombre 2: ${localStorage.getItem("nombre2")} <button id="nombre2">Borrar</button> </p> <br>`;
datos.innerHTML += `<p id= nombre3> Nombre 3: ${localStorage.getItem("nombre3")} <button id="nombre3">Borrar</button> </p>`;


//Borrar Datos
localStorage.removeItem("nombre");

let elementos  = document.querySelectorAll("p button")
elementos.forEach (elemento => {
    elemento.addEventListener("click", (event) => {
        let padre = event.target.parentElement;
        localStorage.removeItem(padre.getAttribute("id"));
        padre.remove();
    });

});

document.querySelector("#all").addEventListener("click", (event) => {
    event.target.remove();
    localStorage.clear();
    datos.innerHTML = "";
});


// Sacar objeto del Local Storage
let persona = JSON.parse(localStorage.getItem("persona"));
console.log(persona);

datos.innerHTML += persona.sitio; 