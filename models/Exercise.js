const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  caloriesBurned: {
    type: Number,
    required: true,
  },
  // Add more fields as needed for your exercise model
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
