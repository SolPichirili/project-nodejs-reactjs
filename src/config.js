import { config } from 'dotenv';
import * as path from 'path';

config({
    path: path.resolve(process.cwd(), `${process.env.NODE_ENV}.env`)
});

const options = {
    port: process.env.PORT,

    persistance: process.env.PERS,

    mongo: {
        url: process.env.MONGO_URL
    },

    fs: {
        productsPath: process.env.PATH_PRODUCTS,
        cartsPath: process.env.PATH_CARTS,
        usersPath: process.env.PATH_USERS,
        ordersPath: process.env.PATH_ORDERS,
        messagesPath: process.env.PATH_MESSAGES
    }
}

export default options;