

import dotenv from 'dotenv'; 
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

dotenv.config(); 

let secret = process.env.JWT_SECRET ?? '';
let user = 'luix'

export class authClass {

    static async login(req:any, res:any){
        const token = jwt.sign({user}, secret, { expiresIn: '1h' });
        return res.json({token: token});
    }   

}