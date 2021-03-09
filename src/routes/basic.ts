import express from 'express';
const router = express.Router();

import passport from 'passport';
require('dotenv/config');

import { LoginStrategy, RegisterStrategy } from '../strategies/basic.js';

passport.use('login', LoginStrategy);
passport.use('register', RegisterStrategy);

router.get('/', (req, res) => {
    res.send({ success: true, message: 'Local auth up' });
});

router.post(
    '/login',
    passport.authenticate('login', {
        failureFlash: false,
    }),
    (req, res) => {
        res.send({ user: req?.user });
    }
);

router.post(
    '/register',
    passport.authenticate('login', {
        failureFlash: false,
    }),
    (req, res) => {
        res.send({ user: req?.user });
    }
);

export default router;
