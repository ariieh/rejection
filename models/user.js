var bookshelf = require('../bookshelf');
var models = require('./');

var User = bookshelf.Model.extend({
  tableName: 'users',
  rejections: function() {
    return this.hasMany(models.Rejection);
  }
});
