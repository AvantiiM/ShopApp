const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.render('categories/index', { categories });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// GET create category form
router.get('/create', (req, res) => {
  res.render('categories/create');
});

// POST create category
router.post('/', async (req, res) => {
  try {
    const { name, avg_price, description } = req.body;
    const category = new Category({ name, avg_price, description });
    const savedCategory = await category.save();
    console.log('Category saved:', savedCategory); // Log the saved category
    res.redirect('/categories');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// GET edit category form
router.get('/:id/edit', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.render('categories/edit', { category });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// PUT update category
router.put('/:id', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    await Category.findByIdAndUpdate(req.params.id, { name, price, description });
    res.redirect('/categories');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// DELETE category
router.delete('/:id', async (req, res) => {
  try {
    await Category.findByIdAndRemove(req.params.id);
    res.redirect('/categories');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
