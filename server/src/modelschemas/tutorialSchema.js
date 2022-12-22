const mongoose = require("mongoose");

const tutorialschema = new mongoose.Schema({
  link: {
    type: String,
  },
});

const TUTORIAL = mongoose.model("TUTORIAL_NCC", tutorialschema);

module.exports = TUTORIAL;
