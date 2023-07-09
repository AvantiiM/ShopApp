const express = require('express');
const router = express.Router();
const Seller = require('../models/seller');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.render('sellers/index', { sellers });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// GET create seller form
router.get('/create', (req, res) => {
  res.render('sellers/create');
});

// POST create seller
router.post('/', async (req, res) => {
  try {
    const { name, quantitySold, reviewAverage, email, joinDate, numProducts } = req.body;
    const seller = new Seller({ name, quantitySold, reviewAverage, email, joinDate, numProducts });
    const savedSeller = await seller.save();
    console.log('Seller saved:', savedSeller); // Log the saved seller
    res.redirect('/sellers');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// GET edit seller form
router.get('/:id/edit', async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);
    res.render('sellers/edit', { seller });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// PUT update seller
router.put('/:id', async (req, res) => {
  try {
    const { name, quantitySold, reviewAverage, email, joinDate, numProducts } = req.body;
    await Seller.findByIdAndUpdate(req.params.id, { name, quantitySold, reviewAverage, email, joinDate, numProducts });
    res.redirect('/sellers');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// DELETE seller
router.delete('/:id', async (req, res) => {
  try {
    await Seller.findByIdAndRemove(req.params.id);
    res.redirect('/sellers');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

