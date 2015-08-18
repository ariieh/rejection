var bookshelf = require('../bookshelf');

var Idea = exports.Idea = bookshelf.Model.extend({
  tableName: 'ideas',
  hasTimestamps: ['created_at', 'updated_at']
});
