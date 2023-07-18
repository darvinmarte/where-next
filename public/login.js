const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

// Route handler for user login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database based on the provided username
    const user = await User.findOne({ where: { username } });

    if (user) {
      // Compare the provided password with the stored password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Successful login
        // Redirect to the desired page or send a success response
        res.redirect('/dashboard');
      } else {
        // Incorrect password
        res.status(401).send('Incorrect password');
      }
    } else {
      // User not found
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;