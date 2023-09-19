import express from 'express';
import routes from "./routes.js"

const APP = express();

APP.use(express.json()); //Indicar para o express a ler bodys com json

APP.use(routes);

export default APP;
