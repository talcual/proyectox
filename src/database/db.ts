
import { Sequelize } from "sequelize";
import dotenv from 'dotenv'; 

dotenv.config(); 


let database:string = process.env.PG_NAME ?? '';
let user:string = process.env.PG_USER ?? '';
let password:string = process.env.PG_PASS ?? '';
let host:string = process.env.PG_HOST ?? '';
let port:any = process.env.PG_PORT ?? 5432;

const sequelize = new Sequelize(database, user, password, {
    host: host,
    port: port,
    dialect: 'postgres'
}); 

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

export default sequelize;