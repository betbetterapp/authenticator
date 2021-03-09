import { Strategy as BasicStrategy } from 'passport-local';

const LoginStrategy = new BasicStrategy(function (username, password, done) {
    console.log('--- Login ---');
    console.log('Username:', username);
    console.log('Password:', password);
    // log user in
    done(null, { username, password });
});

const RegisterStrategy = new BasicStrategy(function (username, password, done) {
    console.log('--- Register ---');
    console.log('Username:', username);
    console.log('Password:', password);
    // log user in
    done(null, { username, password });
});

export { LoginStrategy, RegisterStrategy };
