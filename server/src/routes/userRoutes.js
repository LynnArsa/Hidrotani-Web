const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

// Routes
router.get('/', authenticateToken, userController.getAllUsers);
router.get('/:id', authenticateToken, userController.getUserById);
router.put('/:id', authenticateToken, userController.updateUser);
router.delete('/:id', authenticateToken, userController.deleteUser);

module.exports = router;
