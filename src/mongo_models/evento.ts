
import mongoose from '../database/nosql';

const eventoSchema = new mongoose.Schema({
    name: String
});

const Evento = mongoose.model('Evento', eventoSchema);

export default Evento;