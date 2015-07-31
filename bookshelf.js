var knexConfig = require('./knexfile.js');
var config = process.env.DATABASE_URL ? knexConfig.production : knexConfig.development;
var knex = require('knex')(config);

module.exports = require('bookshelf')(knex);

