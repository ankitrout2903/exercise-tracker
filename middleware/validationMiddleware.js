// validationMiddleware.js
const { validationResult } = require('express-validator');

// Middleware to handle request validation errors
function validateRequest(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
}

module.exports = { validateRequest };
