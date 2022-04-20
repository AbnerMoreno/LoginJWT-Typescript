import express, { Application } from 'express';
import morgan from 'morgan';
import  dotenv from 'dotenv';
import cookiParser from 'cookie-parser';
import bodyParser from "body-parser";

const app: Application = express();

import authRoutes from "./routes/authRoutes";


//configuraciones
app.set('port',3000);
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: "50mb" }));

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/auth',authRoutes);


export default app;