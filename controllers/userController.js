const User = require('../models/User'); // Assuming you have a User model

// Controller to get a list of all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to create a new user
exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Controller to update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you receive the user ID as a URL parameter
    const { username, email, password } = req.body;

    // Find the user by ID and update their information
    const updatedUser = await User.findByIdAndUpdate(id, { username, email, password }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you receive the user ID as a URL parameter

    // Find the user by ID and remove them
    const deletedUser = await User.findByIdAndRemove(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
