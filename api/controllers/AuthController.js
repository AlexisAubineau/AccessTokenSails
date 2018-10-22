module.exports = {
  index: function (req, res) {
    const email = req.param('email');
    const password = req.param('password');

    if (!email || !password) {
      return res.json(401, {err: 'email and password required'});
    }

    Users.findOne({email: email}).then((user) =>{
      if (!user) {
        return res.json(401, {err: 'invalid email or password'});
      }
      console.log(user)
      Users.comparePassword(password, user)
      .then((valid => {
        if (valid === true) {
          res.json({
            user: user,
            token: jwToken.issue({id : user.id })
          })
        } 
        else{
          return res.json(401)
        }
      }))
      .catch(err =>{
        console.log(err)
      })
    })
  }
};