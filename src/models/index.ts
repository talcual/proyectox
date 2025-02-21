
import sequelize from '../database/db';

import User from "./user.model";
import Event from "./event.model";
import SettingEvent from "./events_settings.model";
import Asistente from "./asistentes.model";


const setupdb = () => {
    (async () => {
        console.log(" >> ", User.name);
        console.log(" >> ", Event.name);
        console.log(" >> ", SettingEvent.name);
        console.log(" >> ", Asistente.name);
        console.log(" ");

        User.hasMany(Event, { foreignKey: 'host_id' });
        Event.hasMany(SettingEvent, { foreignKey: 'id_event' });
        Event.hasMany(Asistente, { foreignKey: 'id_event' });

        //await sequelize.sync({ force: true });

    })();
}

export default setupdb;