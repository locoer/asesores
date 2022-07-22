import type { NextApiRequest, NextApiResponse } from "next";
import passport from 'passport'
import LocalStrategy from 'passport-local'

passport.serializeUser(function(user, cb : Function) {
  process.nextTick(function() {
    return cb(null, {
      id: user.id,
      username: user.username,
      picture: user.picture
    });
  });
});

passport.deserializeUser(function(user, cb : Function) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

passport.use(
  new LocalStrategy(
    { passReqToCallback: true },
    (req : any, username : string, password : string , cb : Function ) => {
      // Here you lookup the user in your DB and compare the password/hashed password
      const user = username
      console.log(req)
      // Security-wise, if you hashed the password earlier, you must verify it
      // if (!user || await argon2.verify(user.password, password))
      if ( user !== "erick" ||  password !== "eri" ) {
        cb(null, null)
      } else {
        cb(null, user)
      }
    }
  )
)

export default passport