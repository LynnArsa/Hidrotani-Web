const { promisePool } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthController {
  // Register a new user
  async registerUser(req, res) {
    const { email, password, name, phone } = req.body;

    if (!email || !password || !name) {
      return res.status(422).json({ error: "Email, password, and name are required" });
    }

    const connection = await promisePool.getConnection();
    try {
      await connection.beginTransaction();

      // Check if email already exists
      const [existingUser] = await connection.query('SELECT * FROM User WHERE email = ?', [email]);
      if (existingUser.length > 0) {
        return res.status(409).json({ error: "Email is already in use" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await connection.query(
        'INSERT INTO User (email, password, name, phone) VALUES (?, ?, ?, ?)',
        [email, hashedPassword, name, phone]
      );

      await connection.commit();

      res.status(201).json({
        message: "User created successfully!",
        email,
      });
    } catch (error) {
      console.error("Error during registration:", error);
      await connection.rollback();
      res.status(500).json({
        error: error.message || "An error occurred while registering the user.",
      });
    } finally {
      connection.release();
    }
  }

  // Log in an existing user
  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({ error: "Email and password are required" });
    }

    try {
      const [users] = await promisePool.query('SELECT * FROM User WHERE email = ?', [email]);
      if (users.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }

      const user = users[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user.id_user }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });

      console.log("Generated JWT Token:", token); // Log the token

      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id_user: user.id_user,
          email: user.email,
          name: user.name,
          phone: user.phone,
        },
      });
    } catch (error) {
      res.status(500).json({
        error: error.message || "An error occurred while logging in.",
      });
    }
  }
}

module.exports = new AuthController();
