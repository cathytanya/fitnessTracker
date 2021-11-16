// the two modules necessary for mongoose noSQL
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// creating the collection module here
const fitnessTrackerSchema = new Schema({
    // the date column. data type is date and will use today's date as the default
    day:{
        type: Date,
        default: ()=> new Date()
    },
    // exercise column has: type of exercise (type),name of exercise(name), 
    // how long it is(duration),reps done(reps), sets done(sets), 
    // distance travelled if they do cardio(distance)
    exercises:[
        {
            type:{
                type: String,
            },
            name:{
                type: String,
            },
            weight: {
                type: Number,
            },
            reps:{
                type: Number,
            },
            sets:{
                type: Number,
            },
            duration:{
                type: Number,
            },
            distance:{
                type: Number,
            },
        }],
    },
    {
        toJSON:{
            virtuals: true
        }
    } 
)



fitnessTrackerSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total,exercise)=>{
        return total + exercise.duration;
    },0)
})

const FitnessTracker = mongoose.model("FitnessTracker", fitnessTrackerSchema)

// export the FitnessTracker model
module.exports = FitnessTracker

