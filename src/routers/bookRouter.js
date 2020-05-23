const express = require("express");
const router = new express.Router();
const Book = require("../models/book");
const auth = require("../middleware/auth");

//get all book
router.get("/book", auth, async (req, res) => {
  const userid = req.user._id;
  console.log(userid);
  try {
    const book = Book.find({ userid });
    res.status(201).send(book);
  } catch (e) {
    res.status(400).send(e);
  }
});

//create new book
router.post("/book", auth, async (req, res) => {
  try {
    const book = new Book({
      usrid: req.user._id.toString(),
      title: req.body.title,
      time: req.body.time,
    });
    console.log(book);
    book.save();
    res.status(201).send(book);
  } catch (e) {
    res.staus(400).send(e);
  }
});

module.exports = router;
