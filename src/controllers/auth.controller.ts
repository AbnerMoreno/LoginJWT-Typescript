import { Request, Response  } from "express";

export const signup = (req:Request, res:Response) => {
    res.send('singup');
}

export const signin = (req:Request, res:Response) => {
    res.send('singin');
}

export const profile = (req:Request, res:Response) => {
    res.send('profile')
}