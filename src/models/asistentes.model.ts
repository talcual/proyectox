
import { DataTypes } from 'sequelize';
import sequelize from '../database/db';

const Asistente = sequelize.define(
  'Asistente',
  {
    id_event: { type: DataTypes.INTEGER },
    asistenteInfo: {type: DataTypes.JSON,},
    status: {type: DataTypes.STRING},
  },
  {},
);

export default Asistente;
