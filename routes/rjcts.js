var Rejection = require('../models/rejection');

exports.create = function(req, res, next) {
  var data = {
    title: req["body"]["rjct"]["title"],
    body: req["body"]["rjct"]["body"]
  };

  new Rejection(data).save().then(function(model) {
    res.json(model);
  });
}
