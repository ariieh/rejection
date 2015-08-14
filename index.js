var express = require('express');
var app = module.exports = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var env = require('node-env-file');
var session = require('express-session');

// Load local environment variables
env(__dirname + '/.env');

// Passport
var passport = require('passport');
var fbOAuthConfig = require('./config/oauth.js').facebook;
var FacebookStrategy = new require('passport-facebook').Strategy;
var passportFacebookConfig = new FacebookStrategy(
  fbOAuthConfig.config,
  fbOAuthConfig.callback
);

passport.serializeUser(fbOAuthConfig.serializeUser);
passport.deserializeUser(fbOAuthConfig.deserializeUser);
passport.use(passportFacebookConfig);

app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

// Express config
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
if ('development' == app.get('env')) app.use(errorHandler());

// Routes
var routes = require('./routes');
app.get('/rjcts', routes.rjcts.index);
app.post('/rjcts', routes.rjcts.create);
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
        passport.authenticate('facebook', { failureRedirect: '/login', successRedirect: '/' }),
        routes.login.fbCallback);

// Start server
app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
