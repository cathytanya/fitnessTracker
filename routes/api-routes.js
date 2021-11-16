// list of modules
const router = require("express").Router();
const db = require("../models")

// POST ROUTE to CREATE a workout
router.post("/api/workouts", ({ body },res)=>{
    db.FitnessTracker.create(body).then((dbFitnessTracker=>{
        res.json(dbFitnessTracker)
    })).catch(err=>{
        res.json(err);
    })
})

// GET ROUTE get workouts 
router.get("/api/workouts", (req,res)=>{
    // show all the workouts on this route
    db.FitnessTracker.find().then(dbFitnessTracker =>{
        console.log("previous", dbFitnessTracker)
        dbFitnessTracker.forEach(workout =>{
            const total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            })
            workout.totalDuration = total;
        })
        res.json(dbFitnessTracker);
    }).catch(err =>{
        res.json(err)
    })
})

// GET ROUTE to get workout in range READ
router.get("/api/workouts/range", (req,res)=>{
    db.FitnessTracker.find().then(dbFitnessTracker=>{
        console.log("ALL WORKOUTS")
        console.log(dbFitnessTracker)
        res.json(dbFitnessTracker)
    }).catch(err=>{
        res.json(err);
    })
})

// PUT ROUTES to ADD EXERCISE UPDATE 
router.put("/api/workouts/:id", (req,res)=>{
    db.FitnessTracker.findOneAndUpdate(
        { _id: req.params.id },
        { 
            $inc: { totalDuration: req.body.duration },
            $push:{exercises: req.body}
        },
        {new:true}
    ).then(dbFitnessTracker =>{
        res.json(dbFitnessTracker)
    }).catch(err=>{
        res.json(err);
    })
})


// export the router
module.exports = router;