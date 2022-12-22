const express = require("express");
const Authenticate = require("../middleware/authenticate");
const USER = require("../modelschemas/userschema");
const TUTORIAL = require("../modelschemas/tutorialSchema");

const router = express.Router();

router.post("/add_tutorial", async (req, res) => {
  try {
    const tutorial = new TUTORIAL({
      link: req.body.link,
    });

    await tutorial.save();
    res.status(200).send(tutorial);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/get_tutorial", async (req, res) => {
  try {
    const tutorial = await TUTORIAL.find();

    res.status(200).send(tutorial);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
