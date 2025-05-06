
interface Person {
    nombre: string;
    correo: string;
}

import { json } from 'sequelize';
import User from '../models/user.model';
import zlib from 'zlib';
export class personClass implements Person {

    private static personData: Person = {
        nombre: '',
        correo: ''
    };

    constructor(public nombre: string, public correo: string) {
        personClass.personData.nombre = nombre;
        personClass.personData.correo = correo;
    }
  
    static async get(req:any, res:any){
        
        const chunk:any = []; var jsonFinal = {};

        await req.on('data', (data:any) => {
            chunk.push(data);
        });

        await req.on('end', () => {
            const buffer = Buffer.concat(chunk);
            const decompressed = zlib.unzipSync(buffer);
            const decodeBase64 = decompressed.toString();
            const decoded = Buffer.from(decodeBase64, 'base64').toString('utf-8');
            jsonFinal = JSON.parse(decoded);
            res.json(jsonFinal);
        });

        
    }

    static async post(req:any, res:any){
        let Lui = await User.create({nombre: 'Juan Pachanga', email:'juan@gmail.com' }) 

        res.json({"message" : "Hellow ${Lui}"});
    }
}