var models = require('../models');
var Rejection = models.Rejection;
var Rejections = require('../collections/rejections');

exports.index = function(req, res, next) {
  var startIndex = req.query.startIndex;
  var endIndex = req.query.endIndex;
  var rjcts = new Rejections;

  rjcts.paginated(startIndex, endIndex, function(models) {
    res.json(models);
  });
};

exports.create = function(req, res, next) {
  var data = {
    title: req["body"]["rjct"]["title"],
    body: req["body"]["rjct"]["body"]
  };

  new Rejection(data).save().then(function(model) {
    res.json(model);
  });
};
