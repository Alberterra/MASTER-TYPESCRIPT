let texto:string = "Hola que tal!!!";
let numero:number = 10;
numero = 12.4;
numero = 11.1;

let variable_boleana:boolean = false;
variable_boleana = true;


let normal:any = "Cualquier cosa";
// normal = true;
// normal = "otra cosa";
normal = 9;

let persona:string = "Alberto Terrazas";
persona = "Genaro";

let cualquiera:unknown = "Soy un Texto";

if (typeof cualquiera === "number"){
    let mi_numero:number = cualquiera;
    console.log(mi_numero);
}
console.log(cualquiera);
console.log(texto,numero, variable_boleana, normal);

console.log(persona);


