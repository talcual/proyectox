
import Event from "../models/event.model";

export class EventoClass{

    constructor() {}

    static create(req:any, res:any){
        res.send('Creando un evento' );
    }

    static async get(req:any, res:any){
        let evento = await Event.findOne({ where: { id: req.params.id } });
        res.json(evento);
    }

    static update(req:any, res:any){
        res.send('Actualizando evento' );
    }

    static delete(req:any, res:any){  

    }
}