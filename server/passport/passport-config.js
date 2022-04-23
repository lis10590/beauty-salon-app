// const passport = require("passport");
// const session = require("express-session");
// const MongoStore = require("connect-mongo");
// const mongoose = require("mongoose");

// const Strategies = require("./strategies");
// const { User } = require("../database/schemas");

// module.exports = (app) => {
//   const sessionConfig = {
//     store: MongoStore.create({
//       client: mongoose.connection.getClient(),
//       collectionName: "sessions",
//     }),

//     secret: process.env.SESSION_SECRET,
//     cookie: { domain: process.env.DOMAIN },
//     resave: false,
//     saveUninitialized: false,
//   };

//   app.use(session(sessionConfig));
//   app.use(passport.initialize());
//   app.use(passport.session());

//   passport.serializeUser((user, done) => done(null, user._id));

//   passport.deserializeUser((id, done) =>
//     User.findById({ _id: id })
//       .then((user) => done(null, user))
//       .catch((err) => console.warn(`err at deserialize: ${err}`))
//   );

//   passport.use(Strategies.local);
// };

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../database/schemas");
const validPassword = require("./passwordUtils").validPassword;

const verifyCallback = (username, password, done) => {
  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        return done(null, false);
      }

      const isValid = validPassword(password, user.hash, user.salt);

      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => {
      done(err);
    });
};
const strategy = new LocalStrategy(verifyCallback);
passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  User.findById(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
