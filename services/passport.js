const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users"); //Model Class

//Create a cookie with the user's id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Turn the cookie into a user
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      //Query -> returns promise
      //A promise a JS tool to handle Asychronous code
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        //We already have this user in the database
        return done(null, existingUser);
      }
      //You don't have this user. Sign him up.
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
