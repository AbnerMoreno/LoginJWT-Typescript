import { Request, Response  } from 'express';

import jwt from 'jsonwebtoken';

export const signup = (req:Request, res:Response) => {
    console.log(req.body);
    res.send('singup');
}

export const signin = (req:Request, res:Response) => {
    res.send('singin');
}

export const profile = (req:Request, res:Response) => {
    res.send('profile')
}