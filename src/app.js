import compression from 'compression';
import express from 'express';
import options from './config.js';
import logger from './utils/winston.js';
import router from './routers/index.js';

const app = express();

app.use(compression());
app.use(express.json());


app.use(router);

const port = options.port;

const server = app.listen(port, ()=>{
    logger.info(`Server ok in ${port}`);
});

server.on('error', (error)=>{
    logger.error(`ERROR: ${error}`);
});