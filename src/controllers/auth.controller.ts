import { Request, Response  } from 'express';
import { db } from "../database";

import jwt from 'jsonwebtoken';

class AuthController{

    createUser = (req:Request, res:Response) => {
        console.log(req.body);
        res.send('singup');
    }
    
    signin = (req:Request, res:Response) => {
        res.send('singin');
    }
    
    profile = (req:Request, res:Response) => {
        res.send('profile')
    }

}

export const authController = new AuthController();