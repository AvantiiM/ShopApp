const express = require('express');
const router = express.Router();
const Retrn = require('../models/retrn');

// GET all retrns
router.get('/', async (req, res) => {
  try {
    const retrns = await Retrn.find();
    res.render('retrns/index', { retrns });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// GET create retrn form
router.get('/create', (req, res) => {
  res.render('retrns/create');
});

// POST create retrn
router.post('/', async (req, res) => {
    console.log("in retrns post");
  try {
    const { reason, returnDate, refundStatus } = req.body;
    const retrn = new Retrn({ reason, returnDate, refundStatus });
    const savedRetrn = await retrn.save();
    console.log('Retrn saved:', savedRetrn); // Log the saved retrn
    res.redirect('/retrns');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// GET edit retrn form
router.get('/:id/edit', async (req, res) => {
  try {
    const retrn = await Retrn.findById(req.params.id);
    res.render('retrns/edit', { retrn });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// PUT update retrn
router.put('/:id', async (req, res) => {
  try {
    const { reason, returnDate, refundStatus } = req.body;
    await Retrn.findByIdAndUpdate(req.params.id, { reason, returnDate, refundStatus });
    res.redirect('/retrns');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// DELETE retrn
router.delete('/:id', async (req, res) => {
  try {
    await Retrn.findByIdAndRemove(req.params.id);
    res.redirect('/retrns');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
