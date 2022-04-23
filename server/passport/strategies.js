const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const loginDBAccessor =
  require("../apiDBAccessor/dbAccessorReq").loginDBAccessor;

const Strategies = module.exports;
// const apiUrl = process.env.DBACCESSOR;

Strategies.local = new LocalStrategy((username, password, done) => {
  loginDBAccessor(username)
    // request
    //   .get(`${apiUrl}/api/user/getUser`)
    // .query({ username: username })
    .then((res) => {
      // res.body, res.headers, res.status
      console.log(
        "SUCCESS to read user from db accessor: " +
          JSON.stringify(res.body.user)
      );
      const user = res.body.user;
      if (!user) {
        return done(null, false, { message: "Username doesn't exist" });
      }
      console.log("befor if 2 " + password + " " + user.password);
      console.log(bcrypt.compareSync(password, user.password));
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: "Incorrect username or password" });
      }
      return done(null, user);
    })
    .catch((err) => {
      console.log("Error to read user from db accessor: " + err.message);
    });
});
