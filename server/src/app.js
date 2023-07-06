const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const USER = require("./modelschemas/userschema");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(bodyParser.json());

const AuthRoute = require("./routes/auth");
const PuchRoute = require("../src/routes/punch_in_out");
const leaveRoute = require("../src/routes/leave");
const tutorialRoute = require("../src/routes/tutorials");

app.use("/api", AuthRoute);
app.use("/api/punch", PuchRoute);
app.use("/api/leave", leaveRoute);
app.use("/api/tutorial", tutorialRoute);

require("./db/conn");

const port = process.env.PORT || 5000;

app.listen(6000, () => {
  console.log(`server running at port ${port}`);
});
