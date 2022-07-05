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
        console.log("Cargando Productos...")
        setTimeout(() => {
            resolve (productos);
            //reject(Error("A ocurrido un error"));
        }, 3000);
    });
}

function productoComprado(nombre){
    return new Promise((resolve, reject) => {
        console.log("Haciendo la Compra...")

        setTimeout(() => {
            resolve({
                producto: nombre,
                cliente: "Alberto Terrazas"
            });
            
        }, 3000);
    });

}

function procesarVenta(venta){
    console.log("Producto Comprdado: ", venta)

    productos = productos.filter(producto => {
         return producto.nombre != venta.producto;
     
     });
     return productos;
}

conseguirProductos()
    .then(items =>{
        console.log("Productos Disponibles: ",items)
        return productoComprado("Ordenador Gaming");
    })
    .then(venta => {
        procesarVenta(venta);
        return productoComprado("Tablet");
    })
    .then(venta => {
        procesarVenta(venta);
        return productoComprado("Camara Reflex");
    })
    .then(venta =>{
       procesarVenta(venta);
    })
    .catch(error => console.log(error.message))
    .finally(()=>{
        if(productos.length >= 1){
            console.log("Productos que quedan disponibles: ", productos);
        }else{
            console.log("No qudedan productos disponibles");
        }
        
        

        console.log("Promesa Finalizada !!!")

    });

    Promise.all([conseguirProductos(),productoComprado("Ordenador Gaming"),productoComprado("Tablet")])
    .then(venta =>{
        procesarVenta(venta);
     });

    