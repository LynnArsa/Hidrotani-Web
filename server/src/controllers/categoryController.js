const { promisePool } = require('../db');

class CategoryController {
  // Get all categories
  async getAllCategories(req, res) {
    try {
      const [categories] = await promisePool.query('SELECT * FROM Category');
      res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch categories' });
    }
  }

  // Create a new category
  async createCategory(req, res) {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    try {
      const [result] = await promisePool.query(
        'INSERT INTO Category (name, description) VALUES (?, ?)',
        [name, description]
      );
      res.status(201).json({
        message: 'Category created successfully.',
        category: { id_category: result.insertId, name, description },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create category' });
    }
  }

  // Update a category
  async updateCategory(req, res) {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
      const [result] = await promisePool.query(
        'UPDATE Category SET name = ?, description = ? WHERE id_category = ?',
        [name, description, id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Category not found' });
      }

      res.status(200).json({ message: 'Category updated successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update category' });
    }
  }

  // Delete a category
  async deleteCategory(req, res) {
    const { id } = req.params;

    try {
      const [result] = await promisePool.query(
        'DELETE FROM Category WHERE id_category = ?',
        [id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Category not found' });
      }

      res.status(200).json({ message: 'Category deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete category' });
    }
  }
}

module.exports = new CategoryController();
