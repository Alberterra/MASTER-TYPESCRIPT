// cOMPROBAR SI EL NAVEGADOR ES COMPATIBLE

if(typeof (Storage) == "undefined"){
    window.location.href = "http://intergasdelnorte.com";
}

//Guardar Datos en el Navegador
sessionStorage.setItem("nombre1", "Alberto");
sessionStorage.setItem("sitioweb", "intergasdelnorte.com");


alert(sessionStorage.getItem("sitioweb"));

