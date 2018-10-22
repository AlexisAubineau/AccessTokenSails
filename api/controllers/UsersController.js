module.exports = {
  create: function (req, res) {
    if (req.body.password !== req.body.confirmPassword) {
      return res.json(401, {err: 'Password doesn\'t match, What a shame!'});
    }
    console.log(req.body)
    Users.create(req.body).fetch().then((user) => {
      res.json(200, {user: user, token: jwToken.issue({id: user.id})});
      console.log(user)
    })
    .catch(() => {
      res.send("Error User already exist !")
    })
  }
}