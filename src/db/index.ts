import mongoose from 'mongoose';
import { log } from '../utils/log.js';
require('dotenv/config');

function connect() {
    return mongoose
        .connect(process.env.MONGO_URI!!, { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => {
            log.info('Successfully connected to database');
            return true;
        })
        .catch((err) => {
            log.header('Error while connecting to database');
            log.err(err);
            return false;
        });
}

export { connect };
