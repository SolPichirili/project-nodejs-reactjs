import { config } from 'dotenv';
import * as path from 'path';

config({
    path: path.resolve(process.cwd(), `${process.env.NODE_ENV}.env`)
});

const options = {
    port: process.env.PORT
}

export default options;