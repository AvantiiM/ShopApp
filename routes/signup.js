const express = require('express');
const router = express.Router();
const Member = require('../models/member');

// // GET all categories
// router.get('/', async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.render('categories/index', { categories });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

// GET create member form
router.get('/', (req, res) => {
  res.render('members/signup');
});

// POST create member
router.post('/', async (req, res) => {
  try {
    const { username, birthdate, email, hashedPassword, joinDate, cart, wishlist  } = req.body;
    const member = new Member({ username, birthdate, email, hashedPassword, joinDate, cart, wishlist  });
    const savedMember = await member.save();
    console.log('Member saved:', savedMember); // Log the saved member
    res.redirect('/categories');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
