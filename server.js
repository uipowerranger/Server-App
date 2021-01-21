const path = require("path");
const express = require("express");
require("dotenv").config({ path: "./server/config/config.env" });
const passport = require("passport");
const session = require("express-session");
var cors = require("cors");
const bodyParser = require("body-parser");
const MongoStore = require("connect-mongo")(session);
const connectDB = require("./server/config/db");
const morgon = require("morgan");
const cronJobs = require("./server/config/cronJobs");
const socket = require("./server/config/socketIO");
const http = require("http");
const app = express();

//body parser intialisation
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.use(cors());

//add file upload directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//add logger
app.use(morgon("dev"));

//Connect to db
connectDB();

//assign routes
const routes = require("./server/routes/index");
app.use("/api", routes);

//starting cron jobs
cronJobs.start();

//Start server
const port = process.env.PORT || 4500;
const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//start socket
// socket.start(server);
