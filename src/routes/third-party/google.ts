import express from 'express';
const router = express.Router();

import passport from 'passport';
import GoogleStrategy from '../../strategies/third-party/google.js';

passport.use('google', GoogleStrategy);

router.get('/callback', passport.authenticate('google'), (req, res) => {
    res.send({ user: req?.user });
});
router.get(
    '/',
    passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/plus.login',
            'https://www.googleapis.com/auth/plus.me',
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
        ],
    })
);

export default router;
