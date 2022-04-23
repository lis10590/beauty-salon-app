const express = require("express");
const passport = require("passport");
const genPassword = require("../passport/passwordUtils").genPassword;

const { User } = require("../database/schemas");

const router = express.Router();

module.exports = router;

router.post("/register", (req, res) => {
  const user = req.body;
  console.log(user);
  const saltHash = genPassword(user.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new User({
    fname: user.fname,
    lname: user.lname,
    email: user.email,
    password: user.password,
    hash: hash,
    salt: salt,
  });
  User.find({ email: user.email }, (err, user) => {
    if (err) {
      res.status(400).send({ message: "Error in find function", err });
      return;
    }
    if (user[0]) {
      res.status(400).send({ message: "Username exists" });
      return;
    }

    newUser.save((err, savedUser) => {
      if (err || !savedUser) {
        res.status(400).send({ message: "Create user failed", err });
      } else {
        res.send({
          message: "User created successfully",
        });
      }
    });
  });
});

// router.post("/login", (req, res) => {
//   console.log(req.body);
//   res.send({ message: "success" });
// });

router.post("/login", (req, res, next) => {
  req.body.email = req.body.email.toLowerCase();
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send(info);
    }

    req.login(user, (err) => {
      if (err) {
        res.status(401).send({ message: "Login failed", err });
      }
      res.send({
        message: "Logged in successfully",
      });
    });
  })(req, res, next);
});

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(400).send({ message: "Logout failed", err });
    }
    req.sessionID = null;
    req.logout();
    res.send({ message: "Logged out successfully" });
  });
});

// router.post('/login', passport.authenticate('local', {failureRedirect: '/login-failure', successRedirect: 'login-success'}));

// router.post('/register', (req, res, next) => {
//     const saltHash = genPassword(req.body.password);
//     const salt = saltHash.salt;
//     const hash = saltHash.hash;

//     const newUser = new User({
//         username: req.body.username,
//         hash: hash,
//         salt: salt

//     });

//     newUser.save()
//     .then(user=>{
//         console.log(user);
//     });

//     res.redirect('/login');
// });
