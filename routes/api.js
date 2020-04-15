const router = require("express").Router();
const db = require("../models/");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).sort({"day": -1}).limit(1).then((data) => {
        console.log(data)
        res.json(data);
    });
});
router.post("/api/workouts", (req,res) =>{
    console.log(req.body);
    db.Workout.create(req.body);
});
router.put("/api/workouts/:id", (req, res) => {
    if (req.params){
        db.Exercises.create(req.body)
            .then(({ _id })=> db.Workout.findOneAndUpdate({_id : req.params}, { $push: { exercises: _id } }))
            .then(WorkoutDB=>{
                res.json(WorkoutDB);
            })
        }
});
router.get("/api/workouts/range", (req, res) => {
})

module.exports = router;
