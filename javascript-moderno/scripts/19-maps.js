const antiguos_gadgets = {
    seis: "radiocasette",
    siete:"telefono sobremesa",
    ocho: "compct disk"
};


const gadgets = new Map(Object.entries(antiguos_gadgets));
                    //weakMap  y WeakSet


gadgets.set(1,"PC")
.set(2,"TV")
.set(3,"TABLET")
.set("cuatro","MOVIL")
.set("cinco","LAPTOP");


console.log(gadgets.get("seis"));

console.log(gadgets.has("LAPTOP"));