
interface Person {
    nombre: string;
    correo: string;
}

export class personClass implements Person {

    private static personData: Person = {
        nombre: '',
        correo: ''
    };

    constructor(public nombre: string, public correo: string) {
        personClass.personData.nombre = nombre;
        personClass.personData.correo = correo;
    }
  
    static get(req:any, res:any){
        res.send("¡Hola, TypeScript con Express!");
    }

    static post(req:any, res:any){
        res.json({"message" : "Hellow Hollow"});
    }
}