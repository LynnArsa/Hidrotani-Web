const express = require('express');
const router = express.Router();

const { promisePool } = require('../db');

const getAllCategories = async () => {
  try {
    const [categories] = await promisePool.query('SELECT * FROM Category');
    return categories;
  } catch (error) {
    throw new Error(`Database query failed: ${error.message}`);
  }
};

router.get('/', async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    res.status(500).json({ error: "Failed to retrieve categories" });
  }
});

module.exports = router;
