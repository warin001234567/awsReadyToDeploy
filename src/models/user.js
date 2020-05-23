const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password cannot contain "password"');
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.statics.findByCredentials = async (username, password) => {
  const userOne = await user.findOne({ username: username });
  if (!userOne) {
    throw new Error("Unable to login!!");
  }
  const isMatch = await bcrypt.compare(password, userOne.password);
  if (!isMatch) {
    throw new Error("Unable to login!!");
  }
  return userOne;
};

// hash the password
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//genarateToken
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user.id.toString() }, "somethingeiei");

  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};
const user = mongoose.model("user", userSchema);
module.exports = user;
