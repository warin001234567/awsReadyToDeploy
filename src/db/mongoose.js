const mongoose = require("mongoose");
const moment = require("moment");

mongoose.connect(
  "mongodb://localhost:27017/webpro_theater",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (err, cli) => {
    if (err) {
      return console.log("Unable to connect!!");
    }
    console.log("Connected");
  }
);

// const movieSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   th_title: {
//     type: String,
//     required: true,
//   },
//   release_date: {
//     type: String,
//     required: true,
//     validate(value) {
//       if (!moment(value, "YYYY/MM/DD", true).isValid()) {
//         throw new Error("Invalid date!!! ex. 2020/12/24");
//       }
//     },
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   story: {
//     type: String,
//     required: true,
//   },
//   cast: [
//     {
//       actor: {
//         type: String,
//         required: true,
//       },
//       character: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
//   detail: {
//     production: {
//       type: String,
//       required: true,
//     },
//     genre: [String],
//     runtime: {
//       type: String,
//       required: true,
//     },
//     rating: {
//       type: String,
//       required: true,
//     },
//     director: {
//       type: String,
//       required: true,
//     },
//     writing: [String],
//   },
//   likes: {
//     type: Number,
//     default: 0,
//   },
//   theater: [String],
// });

// const movie = mongoose.model("movie", movieSchema);
// module.exports = movie;

// const test = new movie({
// title: "Test Movie",
// th_title: "ทดสอบ",
// release_date: "2020/12/24",
// description: "something just pop up to my mind",
// story:
//   "this is a short story of the movie so it will have very long long long",
// cast: [
//   { actor: "jark", character: "mainn" },
//   { actor: "may", character: "main" },
// ],
// detail: {
//   production: "some one",
//   genre: ["love", "action", "comady"],
//   runtime: "2h",
//   rating: "PG-13",
//   director: "May and Jark",
//   writing: ["someone", "wwith who", "eiei jojo"],
// },
// likes: 200000000,
// theater: ["บางนา", " บางที่"],
// });
// test
//   .save()
//   .then(() => {
//     console.log(test);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });
