let persona = {
    nombre: "Alberto",
    apellidos: "Terrazas",
    domicilio: {
        pais: "Mexico",
        ciudad: {
            nombre: "Torreon",
            // provincia: "Coahuila"
        }
    }
};

//let comprobar_provincia = persona && persona.domicilio && persona.ciudad && persona.domicilio.ciudad && persona.ciudad.provincia;

let comprobar_provincia;
comprobar_provincia = (persona?.domicilio?.ciudad?.provincia) == undefined ? false:true;
console.log(comprobar_provincia);