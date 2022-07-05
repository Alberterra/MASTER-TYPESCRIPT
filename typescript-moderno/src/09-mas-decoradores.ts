function modmen(mostrar: boolean){

    return function info(target:Object, propertyKey:string, desciptor:any){

        if (mostrar){
            console.log(target);
        console.log(propertyKey);
        console.log(desciptor);
        }else{
            desciptor.value = function(){
                console.log("Metodo Bloqueado!!");
            }
        }
        
    }

}
function mipropiedad(target:any, propertyKey:string, parameterIndex:number){
    console.log("Esta propiedad esta en la clase " + target.constructor.name + " y la posicion del parametro es " + parameterIndex + " " + propertyKey);
}
class Ordenador{

    marca:string = "Asus";
    @modmen(false)
    encender(@mipropiedad mensaje:string){
        console.log("Encendiendo...");
        console.log(mensaje);
    }
}


let pc = new Ordenador();
pc.encender("Iniciando Sesion en la PC de Alberto");