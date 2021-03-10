import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import cors from 'cors';
require('dotenv/config');

import { v4 as uuidv4 } from 'uuid';
import session from 'express-session';
import passport from 'passport';
import './utils/date.js';
import * as db from './db';

export const port = '5441';
export const url = process.env.NODE_ENV == 'development' ? `http://localhost:${port}` : 'NYI';

import GoogleRouter from './routes/third-party/google.js';
import BasicRouter from './routes/basic.js';
import IndexRouter from './routes/index.js';

const app = express();

app.use(logger(':method :url :status - :response-time[2] ms'));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
    session({
        secret: uuidv4(),
        cookie: {
            maxAge: 1000 * 60 * 5,
        },
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user: any, done) {
    done(null, user);
});

db.connect();

app.use('/', IndexRouter);
app.use('/basic', BasicRouter);
app.use('/google', GoogleRouter);

export default app;
