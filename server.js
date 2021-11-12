// list of libraries that need to be installed
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
// HEROKU PORT
const PORT = process.env.PORT || 3000;

// middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
