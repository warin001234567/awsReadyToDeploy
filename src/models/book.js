const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  usrid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const book = mongoose.model("book", bookSchema);
module.exports = book;
