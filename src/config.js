import { config } from 'dotenv';
import * as path from 'path';
import {fileURLToPath} from 'url';

config({
    path: path.resolve(process.cwd(), `${process.env.NODE_ENV}.env`)
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
    port: process.env.PORT,

    persistance: process.env.PERS,

    mongo: {
        url: process.env.MONGO_URL
    },

    fs: {
        productsPath: path.join(__dirname, '/db', process.env.PATH_PRODUCTS),
        cartsPath: path.join(__dirname, '/db', process.env.PATH_CARTS),
        usersPath: path.join(__dirname, '/db', process.env.PATH_USERS),
        ordersPath: path.join(__dirname, '/db', process.env.PATH_ORDERS),
        messagesPath: path.join(__dirname, '/db', process.env.PATH_MESSAGES)
    }, 

    admin: process.env.ADMIN
}

export default options;