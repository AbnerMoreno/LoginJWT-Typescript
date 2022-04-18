import express, { Application } from 'express';
import morgan from 'morgan';

const app: Application = express();

import authRoutes from "./routes/auth";


//configuraciones
app.set('port',3000);


//middlewares
app.use(morgan('dev'));

//rutas
app.use(authRoutes);


export default app;