const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const { User } = require("../database/schemas");

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  //Hash password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  //Create user

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const changePassword = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { email, oldPassword, newPassword } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);
  console.log(hashedPassword);
  const user = await User.findOne({ email });
  console.log(user);
  if (user && (await bcrypt.compare(oldPassword, user.password))) {
    User.findOneAndReplace(
      { email },
      { password: hashedPassword },
      function (err, result) {
        if (err) {
          res.status(400);
          throw new Error(err);
        }

        res.json({
          _id: result.id,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          token: generateToken(result._id),
        });
      }
    );
  } else {
    res.status(400);
    throw new Error("Old password doesn't match the passwored saved in db");
  }
});

module.exports.registerUser = registerUser;
module.exports.loginUser = loginUser;
module.exports.getUser = getUser;
module.exports.changePassword = changePassword;
