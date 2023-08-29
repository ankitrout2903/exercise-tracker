const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Import your user controller

// Route to get a list of all users
router.get('/', userController.getAllUsers);

// Route to create a new user
router.post('/', userController.createUser);

// Route to update a user by ID
router.put('/:id', userController.updateUser);

// Route to delete a user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
