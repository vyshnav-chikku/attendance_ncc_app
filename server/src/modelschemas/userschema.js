const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },
    ncc_id: {
      type: String,
    },
    profile: {
      data: Buffer,
      contentType: String,
    },
    Role: {
      type: Number,
      default: 0,
    },
    puch_in_or_out: {
      type: Number,
      default: 0,
    },
    puchin_details: {
      time: {
        type: String,
      },
      date: {
        type: String,
      },
      location: {
        type: String,
      },
      day: {
        type: String,
      },
    },

    puchout_details: {
      time: {
        type: String,
      },
      date: {
        type: String,
      },
      location: {
        type: String,
      },
      day: {
        type: String,
      },
    },

    attendance: [
      {
        status: {
          type: String,
        },
        time: {
          type: String,
        },
        date: {
          type: String,
        },
        location: {
          type: String,
        },
        day: {
          type: String,
        },
      },
    ],

    leave_details: [
      {
        leave_id: {
          type: String,
        },
        date: {
          type: String,
        },
        days: {
          type: Number,
        },
        reason: {
          type: String,
        },
        approve: {
          type: Number,
          default: 0,
        },
      },
    ],

    notifications: [
      {
        viewed: {
          type: Boolean,
          default: false,
        },

        sender: {
          type: String,
          default: "",
        },
        sender_id: {
          type: String,
          default: "",
        },
        subject: {
          type: String,
        },

        date: {
          type: String,
        },
      },
    ],
    notifications_admin: [
      {
        viewed: {
          type: Boolean,
          default: false,
        },
        type: {
          type: Number,
          default: 0,
        },
        user_id: {
          type: String,
        },
        leave_id: {
          type: String,
        },
        send_date: {
          type: String,
        },
      },
    ],

    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

userschema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

userschema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, {
      expiresIn: "1m",
    });
    console.log(token);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log("auth", err);
  }
};

const USER = mongoose.model("USER", userschema);

module.exports = USER;
