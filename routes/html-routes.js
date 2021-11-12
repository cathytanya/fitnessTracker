// modules needed to install
const router = require("express").Router();
const path = require("path");

// goes to the main page
router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

//takes the user to the exercise.html
router.get("/exercise",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/exercise.html"))
})

//takes the user to teh stats.html
router.get("/stats",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/stats.html"))
})

// Export
module.exports = router;