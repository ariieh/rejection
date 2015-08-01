var bookshelf = require('../bookshelf');
var User = require('./user');

var Rejection = exports.Rejection = bookshelf.Model.extend({
  tableName: 'rejections',
  user: function() {
    return this.belongsTo(User);
  },
  hasTimestamps: ['created_at', 'updated_at']
});

