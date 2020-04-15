const router = require("express").Router();
const Workout = require("../models/Workout.js");


router.get("/api/workouts", (req, res) => {
    console.log("Here");

    Workout.find({}).sort({day: 1}).then((data) => {
        console.log(data);

            res.json(data);
    });
});
router.post("/api/workouts/:id", (req, res) => {
    console.log(req.body);
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
