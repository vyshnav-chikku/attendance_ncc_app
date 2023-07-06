const express = require("express");
const Authenticate = require("../middleware/authenticate");
const USER = require("../modelschemas/userschema");

const router = express.Router();

router.post("/new_leave", Authenticate, async (req, res) => {
  try {
    const user = await USER.findOne({ _id: req.userID });

    user.leave_details.push({
      leave_id: req.body.leave_id,
      date: req.body.date,
      days: req.body.days,
      reason: req.body.reason,
    });

    await user.save();

    const admins = await USER.find({ Role: 1 });

    admins.map(async (admin) => {
      console.log(admin._id.toString());

      admin.notifications_admin.push({
        type: 1,  //leave 1
        user_id: req.userID,
        leave_id: req.body.leave_id,
        send_date: req.body.date,
      });

      await admin.save();
    });

    res.status(200).send(admins);
  } catch (error) {
    res.status(400).send("leave error", error);
  }
});

router.post("/approve_leave/:approve", Authenticate, async (req, res) => {
  try {
    const user = await USER.findOneAndUpdate(
      {
        _id: req.body.id,
        "leave_details.leave_id": req.body.leave_id,
      },
      {
        $set: {
          "leave_details.$.approve": req.params.approve,
        },
      }
    );
    user.notifications.push({
      sender: req.rootUser.name,
      sender_id: req.userID,
      subject: `Your leave ${
        req.params.approve === 1 ? "approved" : "rejected"
      }`,
      date: req.body.date,
    });

    await user.save();

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
