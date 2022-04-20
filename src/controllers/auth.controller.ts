import { Request, Response  } from 'express';
import { db } from "../database";
import bc from "bcryptjs";
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

class AuthController{

    createUser = (req:Request, res:Response) => {
      const {username, email, password} = req.body;
      db.query('INSERT INTO users (username,email,password) VALUES ( $1, $2, $3)', [username,email,password], (err, resp) => {
        if (err) {
          res.json({err});
        } else {
          res.json({ status: 1, message: "Usuario creado con exito" });
        }
      })
    }

    async listUser(req:Request, res:Response){
        const userList = await db.query('SELECT username,email,password FROM users');
        res.json(userList.rows);
    }

    updateProfile(req:Request, res:Response){

      const {username, email, password} = req.body;
      db.query('UPDATE ')

    }
    
    signin = (req:Request, res:Response) => {
        res.send('singin');
    }


    
    profile = (req:Request, res:Response) => {
        res.send('profile')
    }

}

export const authController = new AuthController();