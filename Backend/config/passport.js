const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { UserModel } = require("../model/UserModel");

passport.use(new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    UserModel.authenticate()
));

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

module.exports = passport;
