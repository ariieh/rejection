var bookshelf = require('../bookshelf');
var models = require('../models');

var Rejections = module.exports = bookshelf.Collection.extend({
  model: models.Rejection,
  paginated: function(startIndex, endIndex, callback) {
    var numRows = endIndex - startIndex;

    this.query(function(qb) {
      qb.orderBy('created_at', 'desc').limit(numRows).offset(startIndex);
    }).fetch().then(function(collection) {
      callback(collection);
    });
  }
});

