// Comprobar si esta Disponible

if(navigator.geolocation){
    console.log("Disponible");

    //Conseguir Posicion
    navigator.geolocation.getCurrentPosition(
        position=>{
            let latitud = position.coords.latitude;
            let longitud = position.coords.longitude;
        console.log(position);
    },
    error => {
        console.log("Hay un error en la geolocalizacion");
    }
    );
}



