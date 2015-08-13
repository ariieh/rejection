var express = require('express');
var app = module.exports = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var env = require('node-env-file');
var session = require('express-session');

// Load local environment variables
env(__dirname + '/.env');

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

// Start server
app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
