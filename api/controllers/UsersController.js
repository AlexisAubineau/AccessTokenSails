module.exports = {
  create: function (req, res) {
    if (req.body.password !== req.body.confirmPassword) {
      return res.json(401, {err: 'Password doesn\'t match, What a shame!'});
    }

    Users.create(req.body).exec(function (err, user) {
      if (err) {
        return res.json(err.status, {err: err});
      }

      if (user) {
        res.json(200, {user: user, token: jwToken.issue({id: user.id})});
      }
    })
  }
}