const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('products/index', { products });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// GET create product form
router.get('/create', (req, res) => {
  res.render('products/create');
});

// POST create product
router.post('/', async (req, res) => {
  try {
    const { name, price, quantityAvailable, quantitySold, reviewAverage, numOfReviews, description  } = req.body;
    const product = new Product({ name, price, quantityAvailable, quantitySold, reviewAverage, numOfReviews, description  });
    const savedProduct = await product.save();
    console.log('Product saved:', savedProduct); // Log the saved product
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// GET edit product form
router.get('/:id/edit', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('products/edit', { product });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// PUT update product
router.put('/:id', async (req, res) => {
  try {
    const { name, price, quantityAvailable, quantitySold, reviewAverage, numOfReviews, description  } = req.body;
    await Product.findByIdAndUpdate(req.params.id, { name, price, quantityAvailable, quantitySold, reviewAverage, numOfReviews, description  });
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// DELETE product
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
