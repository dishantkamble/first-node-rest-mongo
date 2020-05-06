const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('./model/user.model');
const dbConfig = require('./config/database.config.js');

const app = express();

app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

require('./route/user.routes.js')(app);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
  res.json({
    "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."
  });
});

app.get("/admin", (req, res, next) => {
  let userInstance = user({
    name: "Dishant Kamble",
    address: "Bengaluru",
    dob: 13051988,
    email: "dishantk@gmail.com"
  });
  res.json(userInstance);
});