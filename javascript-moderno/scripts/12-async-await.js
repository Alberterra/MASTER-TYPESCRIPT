let productos = [{
    nombre:"Ordenador Gaming",
    marca:"Asus",
    precio: 1200
},
{
    nombre:"Tablet",
    marca:"Samsung",
    precio: 300
},
{
    nombre:"Camara Reflex",
    marca:"Canon",
    precio: 650
}
];

function conseguirProductos(){

    return new Promise((resolve, reject) =>{
        
        setTimeout(() => {
            resolve (productos);
            // reject(Error("A ocurrido un error !!!"));
        }, 3000);
    });
}

function conseguirNombre(){

    return new Promise((resolve, reject) =>{
        
        setTimeout(() => {
            resolve ("Victor Robes WEB");
            // reject(Error("A ocurrido un error !!!"));
        }, 3000);
    });
}

async function getMisProductos(){
    try{
        console.log("Cargando Informacion...")
        informacion = await Promise.all([conseguirProductos(), conseguirNombre()]);
        console.log(informacion[0], informacion[1]);
    }catch(error){
        console.log(error.message);
    }

    console.log("Fuera del Try")
    
}

getMisProductos();
