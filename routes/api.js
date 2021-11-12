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

// PUT ROUTES to ADD EXERCISE
router.put("/api/workout/:id", (req,res)=>{
    db.FitnessTracker.findOneAndUpdate(
        {_id: req.params.id},
        {
            $inc:{totalDuration: req.body.duration},
            $push:{exercise: req.body}

        },
        {new: true}
    ).then(dbFitnessTracker =>{
        res.json(dbFitnessTracker)
    }).catch(err=>{
        res.json(err);
    })
})

// POST ROUTE to create a workout
router.post("/api/workout/:id", (req,res)=>{
    db.FitnessTracker.create(body).then((dbFitnessTracker=>{
        res.json(dbFitnessTracker)
    })).catch(err=>{
        res.json(err);
    })
})