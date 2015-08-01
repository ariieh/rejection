var bookshelf = require('../bookshelf');
var Rejection = require('./rejection');

var User = exports.User = bookshelf.Model.extend({
  tableName: 'users',
  rejections: function() {
    return this.hasMany(Rejection);
  },
  hasTimestamps: ['created_at', 'updated_at']
});
