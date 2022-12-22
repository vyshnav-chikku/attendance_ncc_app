const express = require("express");
const USER = require("../modelschemas/userschema");
const router = express.Router();
const bcrypt = require("bcrypt");
const fs = require("fs");
const cookieParser = require("cookie-parser"); //this is used for getting req.cookies in middleware otherwise we dont get cookies in req in middleware
const Authenticate = require("../middleware/authenticate");

router.use(cookieParser());

router.post("/signup", async (req, res) => {
  try {
    const { name, email, phone, password, ncc_id } = req.body.inputs;

    const userExist_email = await USER.findOne({ email: email });

    const userExist_ncc_id = await USER.findOne({ ncc_id: ncc_id });

    if (userExist_email) {
      res.status(201).send("Email is already present");
    } else if (userExist_ncc_id) {
      res.status(201).send("NCC ID already present");
    } else {
      const user = new USER({
        name,
        email,
        phone,
        password,
        ncc_id,
      });

      const userRegister = await user.save();

      if (userRegister) {
        res.status(200).send("user registered successfully");
      } else {
        res.status(400).send("Failed to Registered");
      }
    }
    console.log(req.body.inputs);

    // res.status(200).send(req.body.inputs);
  } catch (error) {
    console.log("signup", error);
    res.status(422).send(error);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { ncc_id, password } = req.body.inputs;

    console.log(req.body.inputs);

    const userExist = await USER.findOne({ ncc_id: req.body.inputs.ncc_id });

    if (userExist) {
      const isMatch = await bcrypt.compare(password, userExist.password);
      if (!isMatch) {
        res.status(201).send("check password");
      } else {
        // const token = await generateToken(userExist._id);
        const token = await userExist.generateAuthToken();
        // res.cookie("jwt", token);

        res.status(200).json({ token: token });
      }
    } else {
      res.status(201).send("Invalid Credentials");
      //hacker dont know the problem is email or password
    }
  } catch (e) {
    res.status(400).send("error");
    console.log("error", e);
  }
});

//for getting data for frontend
router.post("/getData", Authenticate, async (req, res) => {
  try {
    // wbm
    //   .start()
    //   .then(async () => {
    //     const phones = ["9048920962"];
    //     const message = "Good Morning.";
    //     await wbm.send(phones, message);
    //     await wbm.end();
    //   })
    //   .catch((err) => console.log(err));

    res.status(200).send(req.rootUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/getUserById/:id", async (req, res) => {
  try {
    const user = await USER.findById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send("get user by id", error);
  }
});

module.exports = router;
