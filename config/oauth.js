var User = require('../models').User;

module.exports = {
  facebook: {
    serializeUser: function(user, done) {
      done(user.get("id"));
    },

    deserializeUser: function(id, done) {
      new User({id: id})
        .fetch()
        .then(function(user) {
          done(user);
        });
    },

    config: {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: process.env.RJCT_URL + "auth/facebook/callback",
      enableProof: false
    },

    callback: function(accessToken, refreshToken, profile, done) {
      var userToSaveOrUpdate = new User({facebook_id: profile.id});
      new User({facebook_id: profile.id})
        .fetch()
        .then(function(user) {
          return user === undefined ? userToSaveOrUpdate.save().then(done) : done(user);
        });
    }
  }
}
