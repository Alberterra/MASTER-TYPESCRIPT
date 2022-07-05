let conectado = document.querySelector(".online");
let desconectado = document.querySelector(".offline");


function ocultarDIvs(){
    conectado.style.display = "none";
    desconectado.style.display = "none";
    return true;
}

function establecetimer(){
    setTimeout(() =>{
        ocultarDIvs();
        }, 10000);

    return true;
}

ocultarDIvs();

if(navigator.onLine){
    conectado.style.display = "block";
    desconectado.style.display = "none";
    establecetimer();
    }else{
    desconectado.style.display = "block";
    conectado.style.display = "none";
    establecetimer();
}







