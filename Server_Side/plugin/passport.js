import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import mongoose from 'mongoose';
import User from '../model/User.js';
import { KEY } from '../plugin/config/jwtkey.js';

const initializePassport = () => {
  const User = mongoose.model('User');

  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: KEY,
  };

  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      console.log(jwt_payload);
      try {
        const user = await User.findById(jwt_payload.id);
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        console.error(err.message);
        return done(err, false);
      }
    })
  );
};

export default initializePassport;
