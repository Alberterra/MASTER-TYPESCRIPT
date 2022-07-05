function monstrarMensaje<T>(parametro:T){
    return parametro;
}

console.log(monstrarMensaje("Hoal que tal").replace("Hola", "Saludos"));
console.log(monstrarMensaje(12).toFixed(3));
console.log(monstrarMensaje(true));