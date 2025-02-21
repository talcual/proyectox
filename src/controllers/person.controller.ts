
interface Person {
    nombre: string;
    correo: string;
}

import User from '../models/user.model';
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

    static async post(req:any, res:any){
        let Lui = await User.create({firstName: 'Luis' }) 

        res.json({"message" : "Hellow ${Lui}"});
    }
}