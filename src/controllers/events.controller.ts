
import Event from "../models/event.model";
import Evento from "../mongo_models/evento";

export class EventoClass{

    constructor() {}

    static async create(req:any, res:any){

        res.send('Creando un evento' );
    }

    static async get(req:any, res:any){
        console.log(Evento);

        Evento.create({ name: 'Evento 1', participantes: 10 })

        let evento = await Event.findOne({ where: { id: req.params.id } });
        res.json(evento);
    }

    static update(req:any, res:any){
        res.send('Actualizando evento' );
    }

    static delete(req:any, res:any){  

    }
}