const express = require("express");
const Authenticate = require("../middleware/authenticate");
const USER = require("../modelschemas/userschema");

const router = express.Router();

router.post("/:punch", Authenticate, async (req, res) => {
  try {
    const { time, date, location, day } = req.body;
    var user_id = req.userID;
    if (req.params.punch === "1") {
      const user = await USER.findByIdAndUpdate(user_id, {
        puch_in_or_out: req.params.punch,
        puchin_details: {
          time: time,
          date: date,
          location: location,
          day: day,
        },
      });
      user.attendance.push({
        status: req.params.punch,
        time: time,
        date: date,
        location: location,
        day: day,
      });
      await user.save();
    } else {
      const user = await USER.findByIdAndUpdate(user_id, {
        puch_in_or_out: req.params.punch,
        puchout_details: {
          time: time,
          date: date,
          location: location,
          day: day,
        },
      });
    }

    const puchoutInterval = setInterval(async () => {
      const newDate = Date.now();
      const date = new Date(newDate);

      console.log("date", date.getDate());
      console.log("day", day);

      if (day < date.getDate()) {
        const user = await USER.findByIdAndUpdate(user_id, {
          puch_in_or_out: 2,
        });
        console.log("cleared");
        clearInterval(puchoutInterval);
      }
    }, 60000 * 60);

    res.status(200).send([req.body, req.params.punch]);
  } catch (error) {
    res.status(404).send(error);
    console.log("puch error", error);
  }
});

module.exports = router;
