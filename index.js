var express = require('express');
var app = module.exports = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');

// Express config
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
if ('development' == app.get('env')) app.use(errorHandler());

// Routes
app.use(express.static(__dirname + '/public'));
//var routes = require('./routes');
//app.get('/', routes.views.home);
//app.post('/users', routes.users.create);

// Start server
app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
