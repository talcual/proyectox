
class Activo{
    public nombre: String;
    public price : Number;

    constructor(nombre: String, price: Number) {
        this.nombre = nombre;
        this.price = price;
    }

    _toJSON(): String{
        let data = {
           nombre: this.nombre,
           price : this.price
        }

        return JSON.stringify(data);
    }
}

export class ActivoClass{

    constructor() {}

    static createActivo(req:any, res:any){
        let item = new Activo('Computador',1200000);
        res.send('Creando un activo. ' + item._toJSON() );
    }

}
