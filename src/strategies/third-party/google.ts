import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { url } from '../../app.js';
require('dotenv/config');

export default new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID!!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!!,
        callbackURL: `${url}/google/auth/callback`,
    },
    function (accessToken, refreshToken, profile, done) {
        console.log('--- Google login or signup ---');
        console.log('Profile:', profile);
        done(null, profile);
    }
);
