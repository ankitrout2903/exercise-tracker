// Example utility functions
module.exports = {
  // Function to calculate BMI
  calculateBMI(weight, height) {
    const bmi = (weight / Math.pow(height, 2)).toFixed(2);
    return parseFloat(bmi);
  },

  // Other utility functions can be added here
};
