const Exercise = require('../models/Exercise'); // Assuming you have an Exercise model

// Controller to get a list of all exercises
exports.getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to create a new exercise
exports.createExercise = async (req, res) => {
  try {
    const { name, description, duration, caloriesBurned } = req.body;
    const exercise = new Exercise({ name, description, duration, caloriesBurned });
    await exercise.save();
    res.status(201).json(exercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Other exercise-related controllers (e.g., updateExercise, deleteExercise) can be added here
