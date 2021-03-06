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

// .connect() method using the mongoDB 
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/fitnesstrackerdb",
     {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,  
        useFindAndModify: false
    }
);
//routes
app.use(require("./routes/api-routes.js"))
app.use(require("./routes/html-routes.js"))

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  