let nombre = "Victor";
function mostrarNombre(){
  
    let apellidos = "Robles";
    function mostrarApellidos(){
        
        let profesion = "Desarrollador Web";
        function mostrarProfesion(){
            return nombre + " " + apellidos + " " + profesion;
        }
        return mostrarProfesion;
    }
    return mostrarApellidos;
}

console.log(mostrarNombre()()());