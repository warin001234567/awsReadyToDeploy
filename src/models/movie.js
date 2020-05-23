const mongoose = require("mongoose");
const moment = require("moment");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  th_title: {
    type: String,
    required: true,
  },
  release_date: {
    type: String,
    required: true,
    validate(value) {
      if (!moment(value, "YYYY/MM/DD", true).isValid()) {
        throw new Error("Invalid date!!! ex. 2020/12/24");
      }
    },
  },
  description: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  cast: [
    {
      actor: {
        type: String,
        required: true,
      },
      character: {
        type: String,
        required: true,
      },
    },
  ],
  detail: {
    production: {
      type: String,
      required: true,
    },
    genre: [String],
    runtime: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    writing: [String],
  },
  likes: {
    type: Number,
    default: 0,
  },
  fir_imaxtime: [String],
  sec_imaxtime: [String],
  fir_nortime: [String],
  sec_nortime: [String],
  imax: {
    type: Boolean,
    required: true,
  },
  dx: {
    type: Boolean,
    required: true,
  },
});

const movie = mongoose.model("movie", movieSchema);
module.exports = movie;
