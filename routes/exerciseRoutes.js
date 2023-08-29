const express = require("express");
const router = express.Router();
const exerciseController = require("../controllers/exerciseController"); // Import your exercise controller

// Route to get a list of all exercises
router.get("/", exerciseController.getAllExercises);

// Route to create a new exercise
router.post("/", exerciseController.createExercise);

// You can add more routes for updating and deleting exercises here if needed

module.exports = router;
