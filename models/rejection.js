var bookshelf = require('../bookshelf');
var models = require('./');

var Rejection = module.exports = bookshelf.Model.extend({
  tableName: 'rejections',
  user: function() {
    return this.belongsTo(models.User);
  },
  hasTimestamps: ['created_at', 'updated_at']
});
