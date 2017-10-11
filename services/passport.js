const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ facebookId: profile.id }).then(existingUser => {
        if (existingUser) {
          //  already have a user with given profile ID.
          done(null, existingUser); // null means no errors
        } else {
          new User({ facebookId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //  already have a user with given profile ID.
          done(null, existingUser); // null means no errors
        } else {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });

      //console.log('access token: ', accessToken);
      //console.log('refresh token: ', refreshToken);
      //console.log('profile: ', profile);
    }
  )
);
