// the two modules necessary for mongoose noSQL
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// creating the collection module here
const FitnessTrackerSchema = new Schema({
    // the date column. data type is date and will use today's date as the default
    day:{
        type: Date,
        default: Date.now
    },
    // exercise column has: type of exercise (type),name of exercise(name), 
    // how long it is(duration),reps done(reps), sets done(sets), 
    // distance travelled if they do cardio(distance)
    exercise:[
        {
            type:{
                type: String,
                trim: true
            },
            name:{
                type: String,
                trim: true
            },
            duration:{
                type: Number,
                weight: {
                    type: Number,
                    default: 0
                }
            },
            reps:{
                type: Number,
                default: 0
            },
            sets:{
                type: Number,
                default: 0
            },
            distance:{
                type: Number,
                default: 0
            },
        }
    ],
    // when the workout is finished this row would hold the length of the workout
    totalDuration:{
        type: Number,
        default: 0
    }
})

const FitnessTracker = mongoose.model("FitnessTracker",FitnessTrackerSchema)

// export the FitnessTracker model
module.exports = FitnessTracker

