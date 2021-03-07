import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import cors from 'cors';
require('dotenv/config');

import { v4 as uuidv4 } from 'uuid';
import session from 'express-session';
import passport from 'passport';
// import { Strategy as LocalStrategy } from 'passport-local';

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

app.get('/', (req, res) => {
    res.send({ available: true });
});

export default app;
