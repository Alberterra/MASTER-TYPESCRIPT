// NUllish coalescing operator

function multiplicacion(numero1, numero2){
    

    numero1 = numero1 ?? 1;
    numero2 = numero2 ?? 1;

    return numero1 * numero2;

}

function mostrarUsuario(id = 0,nombre = "Usuario Desconocido"){
    return id + "-" + nombre;
}

console.log(multiplicacion(null, 12));

console.log(mostrarUsuario(1, "Alberto"));