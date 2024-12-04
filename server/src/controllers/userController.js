const { promisePool } = require('../db');

class UserController {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const [rows] = await promisePool.query('SELECT * FROM User');
      res.status(200).json({
        message: 'Users fetched successfully',
        users: rows,
      });
    } catch (error) {
      console.error('Error fetching users:', error.message);
      res.status(500).json({
        error: 'An error occurred while fetching users.',
      });
    }
  }

  // Get user by ID
  async getUserById(req, res) {
    const { id } = req.params;

    try {
      const [user] = await promisePool.query('SELECT * FROM User WHERE id_user = ?', [id]);

      if (user.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json({
        message: 'User fetched successfully',
        user: user[0],
      });
    } catch (error) {
      console.error('Error fetching user:', error.message);
      res.status(500).json({
        error: 'An error occurred while fetching the user.',
      });
    }
  }

  // Update user by ID
  async updateUser(req, res) {
    const { id } = req.params;
    const { email, password, name, phone } = req.body;

    if (!email && !password && !name && !phone) {
      return res.status(422).json({
        error: 'At least one field is required to update.',
      });
    }

    const connection = await promisePool.getConnection();
    try {
      await connection.beginTransaction();

      // Fetch current user details
      const [user] = await connection.query('SELECT * FROM User WHERE id_user = ?', [id]);
      if (user.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Prepare updated data for MySQL
      const updatedEmail = email || user[0].email;
      const updatedPassword = password ? await bcrypt.hash(password, 10) : user[0].password;
      const updatedName = name || user[0].name;
      const updatedPhone = phone || user[0].phone;

      // Update in MySQL
      await connection.query(
        'UPDATE User SET email = ?, password = ?, name = ?, phone = ? WHERE id_user = ?',
        [updatedEmail, updatedPassword, updatedName, updatedPhone, id]
      );

      await connection.commit();

      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      await connection.rollback();
      res.status(500).json({ error: 'An error occurred while updating the user.' });
    } finally {
      connection.release();
    }
  }

  // Delete user by ID
  async deleteUser(req, res) {
    const { id } = req.params;

    const connection = await promisePool.getConnection();
    try {
      await connection.beginTransaction();

      // Fetch user details from MySQL
      const [user] = await connection.query('SELECT * FROM User WHERE id_user = ?', [id]);
      if (user.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Delete user from MySQL
      await connection.query('DELETE FROM User WHERE id_user = ?', [id]);

      await connection.commit();

      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error("Error deleting user:", error.message);
      await connection.rollback();
      res.status(500).json({ error: 'An error occurred while deleting the user.' });
    } finally {
      connection.release();
    }
  }
}

module.exports = new UserController();
