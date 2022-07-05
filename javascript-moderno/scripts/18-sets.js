// Crear set

let gadgets = new Set(["movil","tablet","portatil"]);

//Agregar elementos al set
gadgets.add("Maquina de Afeitar");
gadgets.add("PC Sobremesa");
gadgets.add("TV");
gadgets.add("Chromecast");

console.log(gadgets);

//sacar el tamaño del set
console.log(gadgets.size)


//recorrer el set
/*
for (let item of gadgets){
    console.log(item);
}
*/


//Eliminarlos
gadgets.delete("TV");
gadgets.delete("Maquina de Afeitar");

gadgets.forEach(item => console.log(item));
console.log(gadgets.size);

//Comprobar Existencia
console.log(gadgets.has("TV"));
console.log(gadgets.has("Chromecast"));


gadgets.clear();
console.log(gadgets);


