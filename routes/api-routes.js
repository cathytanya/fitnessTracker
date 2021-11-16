// list of modules
const router = require("express").Router();
const FitnessTracker = require("../models/FitnessTracker.js")

// POST ROUTE to CREATE a workout
router.post("/api/workouts", (req,res)=>{
    FitnessTracker.create({})
    .then((dbFitnessTracker=>{
        res.json(dbFitnessTracker)
    })).catch(err=>{
        res.json(err);
    })
})

// GET ROUTE to READ 
router.get("/api/workouts", (req,res)=>{
    // show all the workouts on this route
    FitnessTracker.find()
    .then(dbFitnessTracker =>{
        res.json(dbFitnessTracker);
    }).catch(err =>{
        res.json(err)
    })
})

// GET ROUTE to get workout in range READ
router.get("/api/workouts/range", (req,res)=>{
    FitnessTracker.find({})
    .then(dbFitnessTracker=>{
        console.log("ALL WORKOUTS")
        console.log(dbFitnessTracker)
        res.json(dbFitnessTracker)
    }).catch(err=>{
        res.json(err);
    })
})

// PUT ROUTES to ADD EXERCISE UPDATE 
router.put("/api/workouts/:id", (req,res)=>{
    FitnessTracker.findOneAndUpdate(
        { id: req.params.id },
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
//DELETE ROUTE to DELETE EXERCISE
router.delete("/api/workouts", ({ body }, res) => {
    FitnessTracker.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
  });



// export the router
module.exports = router;