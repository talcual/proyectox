

import { DataTypes } from 'sequelize';
import sequelize from '../database/db';

const User = sequelize.define(
  'User',
  {
    nombre: { type: DataTypes.STRING, allowNull: false, },
    apellido: {type: DataTypes.STRING,},
    email: {type: DataTypes.STRING, allowNull: false, unique: true,},
    telefono: {type: DataTypes.STRING,},
  },
  {},
);


export default User;

