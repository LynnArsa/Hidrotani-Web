require('dotenv').config();

// Log the environment variable loading process
console.log('Loaded environment variables:');
console.log('JWT_SECRET:', process.env.JWT_SECRET_KEY);  // Make sure it's loaded correctly

const express = require('express');
const cors = require('cors');

// Import routes
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const articleRoutes = require('./routes/Articles/articleRoutes');
const postRoutes = require('./routes/Forum/postRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Middleware
const authenticateToken = require('./middleware/authMiddleware');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', authenticateToken, userRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/forum/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
