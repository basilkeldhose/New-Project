const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose')

var Admin =mongoose.model('Admin')

passport.use(new localStrategy({
    usernameField:'username'},
    (username, password, done) => {
        Admin.findOne({ username: username },
            (err, admin) => {
                if (err)
                    return done(err);
                else if (!admin)
                    return done(null, false, { message: 'username is not registered' });
                else if (!admin.verifyPassword(password))
                    return done(null, false, { message: 'Wrong password.' });
                else
                    return done(null, admin);
            });
    })
);