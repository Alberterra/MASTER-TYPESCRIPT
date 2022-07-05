document.addEventListener('DOMContentLoaded', function(){

// Strings Clasicos
let nombre = "Alberto";
let apellidos = "Terrazas";
let profesion = "Desarrollador Web"
let nya = nombre + " " + apellidos + "\n " + profesion;

// Template Strings
/*
let plantilla = `${nombre} ${apellidos} 
${profesion}
`;*/
function ficha(nombre, apellidos, profesion){
    let fichaTecnica = `
    <div class="ficha">
        <h2>${nombre} ${apellidos}</h2>
        <h3>${profesion}</h3>
        <p>Forma parte del equipo de Victor Robles Web</p>
    </div>
`;
return fichaTecnica;

}

let cajaFichas = document.createElement ("section");


cajaFichas.innerHTML = ficha ("Uziel", "Ruiz", "Gerente");
cajaFichas.innerHTML += ficha ("Alberto", "Terrazas", "Sistemas");
cajaFichas.innerHTML += ficha ("Francisco", "Duron", "Director");


   //document.body.appendChild(cajaFichas);
    document.querySelector("#contenedor").appendChild(cajaFichas);

}, false);
//console.log(nya);
//console.log(fichaTecnica);

