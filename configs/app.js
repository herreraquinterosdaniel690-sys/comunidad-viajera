'use strict';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { dbConnection } from './db.js';
import 'dotenv/config';
import authRoutes from '../src/auth/auth.routes.js';
import postRoutes from '../src/post/post.routes.js'
import commentRoutes from '../src/comments/comment.routes.js'
import countryRoutes from '../src/countries/country.routes.js'
import placeRoutes from '../src/places/place.routes.js'
import placeCommentRoutes from '../src/places/placeComment.routes.js'
import { handleErrors } from '../middlewares/handle-errors.js'
import { seedDatabase } from './seeder.js'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const middlewares = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }))
    app.use(cors());
    app.use(helmet({
        origin: '*',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }));
    app.use(helmet({
        crossOriginResourcePolicy: { policy: "cross-origin" },
        crossOriginEmbedderPolicy: false
    }));
    app.use(morgan('dev'));
}

const routes = (app) => {
    app.use('/api/auth', authRoutes)
    app.use('/api/post', postRoutes)
    app.use('/api/comments', commentRoutes)
    app.use('/api/countries', countryRoutes)
    app.use('/api/places', placeRoutes)
    app.use('/api/place-comments', placeCommentRoutes)
    app.use('/api/uploads', express.static(join(__dirname, '../assets/img')))
    app.use('/uploads', express.static(join(__dirname, '../assets/img/places')))
}

const conectarDB = async () => {
    try {
        await dbConnection();
    } catch (error) {
        console.log(`Error al conectar la db: ${error}`)
    }
}

export const initServer = async () => {
    const app = express();

    try {

        middlewares(app)
        routes(app)
        app.use(handleErrors)

        app.use((err, req, res, next) => {
            console.log("🚨 ERROR GLOBAL:", err);
            res.status(500).json({ error: err.message });
        });
        await conectarDB()
        await seedDatabase()
        app.listen(process.env.PORT, () => {
            console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(`Error al iniciair el servidor: ${error.message}`);
    }
}
