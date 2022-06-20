import express from 'express';
import cors from 'cors';
import http from 'http';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

import routes from './routes';
import swaggerFile from './documentation/swagger.json';

class App {

    private app;

    constructor() {
        this.app = express();

        this.middlewares();
        this.routes();
        this.documentation();
    }

    getApp() {
        return this.app;
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(cors())
    }

    routes() {
        this.app.use(routes);
    }

    enviromnt() {
        dotenv.config();
    }

    documentation() {
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
    }

}

export default new App().getApp();
