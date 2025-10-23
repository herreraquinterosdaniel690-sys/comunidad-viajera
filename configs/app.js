'use strict';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { dbConnection} from'./db.js';
import 'dotenv/config';
import authRoutes from '../src/auth/auth.routes.js';
import postRoutes from '../src/post/post.routes.js'
import requestLimit from '../middlewares/request-limit.js'
import commentRoutes from '../src/comments/comment.routes.js'
import { handleErrors } from '../middlewares/handle-errors.js'

const middlewares = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: false}))
    app.use(cors());
    app.use(helmet({
        origin: '*',
        credentials: true,
        methods: ['GET','POST','PUT','DELETE','OPTIONS'],
        allowedHeaders: ['Content-Type','Authorization']
    }));
    app.use(helmet({
        crossOriginResourcePolicy: {policy: "cross-origin"},
        crossOriginEmbedderPolicy: false
    }));
    app.use(morgan('dev'));
    app.use(requestLimit)
}

const routes = (app) => {
    app.use('/api/auth', authRoutes)
    app.use('/api/post', postRoutes)
    app.use('/api/comments', commentRoutes)
}

const conectarDB = async () => {
    try{
        await dbConnection();
    }catch(error){
        console.log(`Error al conectar la db: ${error}`)
    }
}

export const initServer = async () => {
    const app = express();

    try{

        middlewares(app)
        routes (app)
        app.use(handleErrors)
        await conectarDB()
        app.listen(process.env.PORT,() => {
            console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
        })
    }catch(error){
        console.log(`Error al iniciair el servidor: ${error.message}`);
    }
}
