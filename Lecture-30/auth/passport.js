const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const User = require('../models/users');
const FacebookStrategy = require('passport-facebook');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new LocalStrategy(
    async function (username, password, done) {
        try {
            let user = await User.findOne({username});
            if (!user) { return done(null, false); }
            bcrypt.compare(password, user.password)
                .then(function (result) {
                    if (result == false) return done(null, false);
                    return done(null, user);
                })
            return done(null, user);
        }
        catch (err) {
            if (err) { return done(err); }
        }
    }
));

passport.use(new FacebookStrategy({
    clientID: "208278391672051",
    clientSecret: "34a56fc2efa61b02b4583a6b5e94c3fe",
    callbackURL: "http://localhost:4444/auth/facebook/callback"
},
    async function (accessToken, refreshToken, profile, cb) {
        // console.log("Token: ", accessToken);
        // console.log("Refresh Token: ", refreshToken);
        console.log("Profile: ", profile);
        let facebookId = profile.id;
        let user = await User.findOne({ facebookId }).exec();
        console.log(user);
        if (user) {
            console.log(user);
            return cb(null, user);
        }
        else {
            User.create({
                username: profile.displayName,
                token: accessToken,
                facebookId: profile.id
            }).then((user) => {
                cb(null, user);
            })
                .catch(err => {
                    cb(err, false);
                });
        }
    }
));

passport.use(new GoogleStrategy({
    clientID: "799115154696-n70qfh54inqicjf5v5r1vth18165hc1p.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:4444/auth/google/callback"
},
    async function (accessToken, refreshToken, profile, cb) {
        // console.log("Access Toke: ", accessToken);
        // console.log("Refresh Token: ", refreshToken);
        console.log("Profile: ", profile);
        let googleId = profile.id;
        let user = await User.findOne({ googleId }).exec();
        if (user) {
            console.log(user);
            return cb(null, user);
        }
        else {
            User.create({
                username: profile.displayName,
                token: accessToken,
                googleId: profile.id
            }).then((user) => {
                cb(null, user);
            })
                .catch(err => {
                    cb(err, false);
                });
        }
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id)
        .then((user) => {
            done(null, user);
        })
        .catch(err => {
            done(err, false);
        });
});

module.exports = passport;