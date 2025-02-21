

import { DataTypes } from 'sequelize';
import sequelize from '../database/db';

const Event = sequelize.define(
  'Event',
  {
    titulo: { type: DataTypes.STRING, allowNull: false, },
    description: {type: DataTypes.STRING,},
    type: {type: DataTypes.STRING, allowNull: false,},
    visibility: {type: DataTypes.STRING,},
    status: {type: DataTypes.STRING,},
    host_id: {type: DataTypes.INTEGER,},
    start_date: {type: DataTypes.DATE,},
    end_date: {type: DataTypes.DATE,},
    location: {type: DataTypes.JSON,},
    max_guests: {type: DataTypes.STRING,},
  },
  {},
);


export default Event;

