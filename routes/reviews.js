const express = require('express');
const router = express.Router();
const Review = require('../models/review');

// GET all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.render('reviews/index', { reviews });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// GET create review form
router.get('/create', (req, res) => {
  res.render('reviews/create');
});

// POST create review
router.post('/', async (req, res) => {
  try {
    const { rating, comment, reviewDate } = req.body;
    const review = new Review({ rating, comment, reviewDate });
    const savedReview = await review.save();
    console.log('Review saved:', savedReview); // Log the saved review
    res.redirect('/reviews');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// GET edit review form
router.get('/:id/edit', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    res.render('reviews/edit', { review });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// PUT update review
router.put('/:id', async (req, res) => {
  try {
    const { rating, comment, reviewDate } = req.body;
    await Review.findByIdAndUpdate(req.params.id, { rating, comment, reviewDate });
    res.redirect('/reviews');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// DELETE review
router.delete('/:id', async (req, res) => {
  try {
    await Review.findByIdAndRemove(req.params.id);
    res.redirect('/reviews');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
