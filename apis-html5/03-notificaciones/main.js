//Notificaciones

//Comprobar compatibilidad
if(Notification == "undefined"){
    console.log("Tu navegador no es compatible con Notificaciones!!!");
}else{
    console.log("Eres Compatible ", Notification);

    // Pedir Permiso

    if(Notification.permission !== "granted"){
        Notification.requestPermission();

    }
        
    console.log(Notification.permission);
    let principal = "Hola soy una Notificacion";
    let opciones = {
        body: "Cuerpo de la notificacion, explicacion, etc",
        icon: "https://media.istockphoto.com/vectors/soccer-ball-isolated-vector-id960508912?k=20&m=960508912&s=612x612&w=0&h=n9pYe1hhrsrBdzDcnMN4-eeR1i5EE2uPnJIEmKmiLZY="
    };

    const notificacion = new Notification(principal, opciones);

    notificacion.onclick = (event) => {
        event.preventDefault();
        //window.open("https://www.intergasdelnorte.com");
        window.location("https://www.intergasdelnorte.com");

    };

    notificacion.close = () => {
        alert("Ups que pena que dejes la pagina... Adios!!!")
    };

    setTimeout(()=>{
        notificacion.close();
    },12000);
    
}