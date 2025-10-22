const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users"); //Model Class

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      //Query -> returns promise
      //A promise a JS tool to handle Asychronous code
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          //We already have this user in the database
          done(null, existingUser);
        } else {
          //You don't have this user. Sign him up.
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
