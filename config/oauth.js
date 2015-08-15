var User = require('../models').User;

module.exports = {
  facebook: {
    serializeUser: function(user, done) {
      console.log("serializing user", user.get("id"));
      done(user.get("id"));
    },

    deserializeUser: function(id, done) {
      console.log("deserializing user", id);
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
      userToSaveOrUpdate
        .fetch()
        .then(function(user) {
          if (user === null) {
            userToSaveOrUpdate.save().then(function(user, err) {
              return done(err, user);
            });
          } else {
            return done(null, user);
          }
        });
    }
  }
}
