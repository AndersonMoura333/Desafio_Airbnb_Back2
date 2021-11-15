import passport from 'passport';
import passportLocal from 'passport-local';
import passportJwt from 'passport-jwt';

const LocalStrategy = passportLocal.Strategy;

// passport.use('login', new LocalStrategy())
