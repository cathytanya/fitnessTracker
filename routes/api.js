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
router.put("/api/workouts/:id", (req,res)=>{
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
router.post("/api/workouts/:id", (req,res)=>{
    db.FitnessTracker.create(body).then((dbFitnessTracker=>{
        res.json(dbFitnessTracker)
    })).catch(err=>{
        res.json(err);
    })
})

// GET ROUTE to get workout in range
router.get("/api/workouts/range", (req,res)=>{
    db.FitnessTracker.find({}).then(dbFitnessTracker=>{
        console.log("ALL WORKOUTS")
        console.log(dbFitnessTracker)
        res.json(dbFitnessTracker)
    }).catch(err=>{
        res.json(err);
    })
})

// export the router
module.exports = router;