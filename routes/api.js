const router = require("express").Router();
const Workout = require("../models/Workout.js");


router.get("/api/workouts", (req, res) => {

    Workout.find({}).sort().then((data) => {
        res.json(data);
    });
});
router.post("/api/workouts", (req,res) =>{
    console.log(req.body);
    Workout.create(req.body);
});
router.put("/api/workouts/:id", (req, res) => {

    Workout.update(req.body, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    })
});
router.get("/api/workouts/range", (req, res) => {
})

module.exports = router;
