const bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true 
    },

    encryptedPassword: {
      type: 'string'
    },
  },

  customToJSON: function () {
    delete this.encryptedPassword;
    return this;
  },

  beforeCreate : function (values, next) {
    bcrypt.genSalt(10, function (err, salt) {
    if(err) return next(err);
      bcrypt.hash(values.password, salt, function (err, hash) {
      if(err) return next(err);  
        values.encryptedPassword = hash;
        next();
      })
    })
  },
    
  comparePassword : function (password, user, cb) {
    bcrypt.compare(password, user.encryptedPassword, function (err, match) {
    if(err) cb(err);
      if(match) {
        cb(null, true);
      } 
      else {
        cb(err);
      }
    })
  }
}