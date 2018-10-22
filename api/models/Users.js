const bcrypt = require('bcrypt');
const salt = 10

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

  beforeCreate : function (values, next, err) {
    return bcrypt.genSalt(10)
    .then(() => {
      if(err){
        console.log("Ici")
        return next(err)
      }
      bcrypt.hash(values.password, salt).then(function(hash) {
        console.log("Test")
        values.encryptedPassword = hash
        next()
      })
    })
  },
    
  comparePassword : function (password, user) {
    return bcrypt.compare(password, user.encryptedPassword)
    .then((res => {
      console.log(res)
      if(res == true){
        console.log("Ici")
        return true
      }
      else{
        console.log("error")
        return false
      }
    }))
  }
}