const express = require("express");
const router = new express.Router();
const Movie = require("../models/movie");
// const User = require("../models/user");
const auth = require("../middleware/auth");

// router.get("/", (req, res) => {
//   console.log("test");
//   res.render("index");
// });
// router.get("/index", (req, res) => {
//   console.log("test");
//   res.render("index");
// });

// router.get("/process_1", (req, res) => {
//   res.render("process_1");
// });

// router.get("/process_2", (req, res) => {
//   res.render("process_2");
// });

// router.get("/process_3", (req, res) => {
//   res.render("process_3");
// });

// get all
router.get("/movie", async (req, res) => {
  try {
    const movie = await Movie.find();
    console.log(movie);
    res.status(201).send(movie);
  } catch (e) {
    res.status(400).send(e);
  }
});
// create new movie
router.post("/movie", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    console.log(movie);
    const alreadyhas = await Movie.find({ title: movie.title });
    if (alreadyhas.length > 0) {
      return res.status(404).send({ error: "already had that movie" });
    }
    await movie.save();
    res.status(201).send(movie);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get movie by id
router.get("/movie/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const movie = await Movie.findOne({ _id });
    console.log(movie);
    res.status(201).send(movie);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get movie by name
router.post("/movie/name", async (req, res) => {
  console.log(req.body.movieTitle);
  try {
    const movie = await Movie.findOne({ title: req.body.movieTitle });
    console.log(movie);
    res.status(201).send(movie);
  } catch (e) {
    res.status(400).send(e);
  }
});

// update movie by id
router.put("/movie/update/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const movie = await Movie.findById(_id).exec();

    let query = { $set: {} };
    for (let key in req.body) {
      console.log(movie[key] && movie[key] !== req.body[key]);
      if (movie[key] && movie[key] !== req.body[key]) {
        // if the field we have in req.body exists, we're gonna update it
        query.$set[key] = req.body[key];
        console.log(query.$set[key]);
      }
    }
    console.log(query);
    const updatedMovie = await Movie.updateOne({ _id: _id }, query).exec();
    console.log(updatedMovie);

    res.status(201).send(updatedMovie);
  } catch (e) {
    res.status(400).send(e);
  }
});

// delete movie by id
router.delete("/movie/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const movie = await Movie.findByIdAndDelete(_id);
    res.status(201).send(movie);
  } catch (e) {
    res.status(400).send(e);
  }
});

// add like
router.get("/movie/add/like/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    console.log(_id);
    const movie = await Movie.findById(_id);
    console.log(movie.likes);
    movie.likes += 1;
    movie.save();
    console.log(movie.likes);
    const likes = movie.likes;
    res.status(201).send({ likes });
  } catch (e) {
    res.status(400).send(e);
  }
});

// minus like
router.get("/movie/minus/like/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    console.log(_id);
    const movie = await Movie.findById(_id);
    console.log(movie.likes);
    movie.likes -= 1;
    movie.save();
    console.log(movie.likes);
    const likes = movie.likes;
    res.status(201).send({ likes });
  } catch (e) {
    res.status(400).send(e);
  }
});

// signup user
// router.post("/signup", async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     const token = await user.generateAuthToken();
//     res.status(201).send({ user, token });
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// //signin user
// router.post("/signin", async (req, res) => {
//   try {
//     const user = await User.findByCredentials(
//       req.body.username,
//       req.body.password
//     );
//     const token = await user.generateAuthToken();
//     res.status(201).send({ user, token });
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// router.get("*", (req, res) => {
//   res.send("404");
// });

module.exports = router;
