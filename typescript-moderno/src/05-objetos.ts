//Objetos ts

type empresas = {
    nombre: string,
    sector:string,
    servicios: string[],
    facturacion: number,
    mostrar:()=>string
} 


let empresa:empresas = {
        nombre: "INTERGAS DEL NORTE",
        sector:"Energia",
        servicios: ["Comercializacion de GAS LP","Venta de Cilindros","venta por Autotanque"],
        facturacion: 55_000_000_000,
        mostrar(){
            return this.nombre + " " + this.sector;

        }
    };

    console.log(empresa.mostrar());
