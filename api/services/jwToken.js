const jwt = require('jsonwebtoken')
const tokenSecret = "secretissecet"

module.exports.issue = function(payload) {
  return jwt.sign(
    payload,
    tokenSecret,
    {
      expiresIn : 180
    }
  );
};

module.exports.verify = function(token) {
  return jwt.verify(
    token,
    tokenSecret,
    {},
    next()
  );
};