const router = require("express").Router();
const db = require("../models/");
const mongojs = require("mongojs");


router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).sort({"day": -1}).limit(1).then((data) => {
        res.json(data);
    });
});
router.post("/api/workouts", (req,res) =>{
    db.Workout.create(req.body).then(data=>{
        res.json(data);
    })
});
router.put("/api/workouts/:id", (req, res) => {
    if (req.params.id != undefined){
        db.Exercises.create(req.body)
            .then(({ _id })=> db.Workout.findOneAndUpdate({"_id" : mongojs.ObjectId(req.params.id)}, { $push: { exercises: _id }, $inc:{ "totalDuration": req.body.duration} }))
            .then(WorkoutDB=>{
                res.json(WorkoutDB);
            })
    }
});
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).populate("exercises").then((data)=>{
        res.json(data);
    })
})

module.exports = router;
