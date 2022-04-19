import { Request, Response  } from 'express';
import { db } from "../database";

import jwt from 'jsonwebtoken';

class AuthController{

    createUser = (req:Request, res:Response) => {
      const {username, email, password} = req.body;
      db.query('INSERT INTO users (username,email,password) VALUES ( $1, $2, $3)', [username,email,password], (err, resp) => {
        if (err) {
          res.json({err});
        } else {
          res.json({ status: 1, message: "Servicio creado con exito" });
        }
      })
    }

    async listUser(req:Request, res:Response){
        const userList = await db.query('SELECT username,email,password FROM users');
        res.json(userList.rows);
    }
    
    signin = (req:Request, res:Response) => {
        res.send('singin');
    }
    
    profile = (req:Request, res:Response) => {
        res.send('profile')
    }

}

export const authController = new AuthController();