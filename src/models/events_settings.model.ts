
import { DataTypes } from 'sequelize';
import sequelize from '../database/db';

const SettingEvent = sequelize.define(
  'SettingEvent',
  {
    id_event: { type: DataTypes.INTEGER },
    setting: {type: DataTypes.STRING,},
    value: {type: DataTypes.STRING, allowNull: false,},
  },
  {},
);


export default SettingEvent;
