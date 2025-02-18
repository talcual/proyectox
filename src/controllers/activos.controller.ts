
class Activo{
    public nombre: String;
    public price : Number;

    constructor(nombre: String, price: Number) {
        this.nombre = nombre;
        this.price = price;
    }
}

export class ActivoClass{

    constructor() {}

    static createActivo(req:any, res:any){
        let item = new Activo('Computador',1200000);
        res.send('Creando un activo.');
    }

}