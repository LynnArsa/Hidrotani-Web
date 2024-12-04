const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController'); // Ensure this import is correct
const authenticateToken = require('../middleware/authMiddleware'); // Ensure this import is correct

// Register a new user
router.post('/register', AuthController.registerUser); // Ensure registerUser is a valid function

// Log in an existing user
router.post('/login', AuthController.login); // Ensure login is a valid function

// Example of a protected route
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: "Protected profile route", user: req.user });
});

module.exports = router;
