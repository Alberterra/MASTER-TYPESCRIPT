const hortalizas = document.querySelectorAll("#cesta > div");
const huerto = document.querySelector("#huerto");
const cesta = document.querySelector("#cesta");



hortalizas.forEach((hortaliza, indice) => {
    //asignar id a Elementos
    hortaliza.setAttribute("id", "hortaliza" + indice);
        
        //DRAGSTART
        hortaliza.addEventListener("dragstart", (e) =>{
            //console.log("Estas Moviendo el Tomate " + parseInt(indice+1));
            
            // compartir info del elemento que muevo
            e.dataTransfer.setData("text", e.target.id);

        });
    
   /* 
   //DRAG
        tomate.addEventListener("drag", () =>{
            console.log("Estas Moviendo el Tomate " + parseInt(indice+1));
        });
    */
    /* 
    //DRAGend
        tomate.addEventListener("dragend", () =>{
            console.log("Estas Moviendo el Tomate " + parseInt(indice + 1));
        });
    */
});

//DRAGENTER
/*
    huerto.addEventListener("dragenter", (e) =>{
        e.preventDefault();
        console.log("Tomate Plantado!!!");
    });
*/


//DRAGOVER
    huerto.addEventListener("dragover", (e) =>{
        e.preventDefault();
        // console.log("Tomate Moviendose");
    });
//DROP
    huerto.addEventListener("drop", (e) =>{
        e.preventDefault();
        //console.log("Tomate Plantado!!!");

        //Recibir la INformacion y  Soltar el elemento en la zona 
        let hortaliza = e.dataTransfer.getData("text");
        e.target.appendChild(document.querySelector("#" + hortaliza));

        console.log("has plantado " + hortaliza);
    });
/*
//DRAGLEAVE
    huerto.addEventListener("dragleave", (e) =>{
        e.preventDefault();
        console.log("Tomate Recogido!!!");
    });
*/    


cesta.addEventListener("dragover", (e) =>{
    e.preventDefault();
    // console.log("Tomate Moviendose");
});
//DROP
cesta.addEventListener("drop", (e) =>{
    e.preventDefault();
    //console.log("Tomate Plantado!!!");

    //Recibir la INformacion y  Soltar el elemento en la zona 
    let hortaliza = e.dataTransfer.getData("text");
    e.target.appendChild(document.querySelector("#" + hortaliza));

    console.log("has Recogido " + hortaliza);
});




