import * as winston from 'winston';

const logger = winston.createLogger({
    level:'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({level: winston.verbose}),
        new winston.transports.File({filename: 'logs/error.log', level: winston.error})
    ]
});

export default logger;