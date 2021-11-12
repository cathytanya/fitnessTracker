// list of modules
const db = require("../models")
const router = require("express").Router();

// GET ROUTE to GET WORKOUT
router.get("/api/workouts", (req,res)=>{
    // show all the workouts on this route
    db.FitnessTracker.find({}).then(dbFitnessTracker =>{
        // forEach method is applied 
        dbFitnessTracker.forEach(fitness =>{
            
            const total = 0;
            fitness.exercise.forEach(e => {
                total += e.duration;
            });
            fitness.totalDuration = total;
        })
        res.json(dbFitnessTracker);
    }).catch(err =>{
        res.json(err)
    })
})