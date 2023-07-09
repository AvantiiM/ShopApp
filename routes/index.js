const express = require('express');
const router = express.Router();

// Navigation menu
const menu = [
  { title: 'Home', link: '/' },
  { title: 'Sign Up', link: '/signup' },
  { title: 'Products', link: '/products' },
  { title: 'Categories', link: '/categories' },
  { title: 'Orders', link: '/orders' },
  { title: 'Reviews', link: '/reviews' },
  { title: 'Return', link: '/retrns' },
  { title: 'Sellers', link: '/sellers' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' }
];

// Home page route
router.get('/', (req, res) => {
  res.render('home', { menu });
});

// About page route
router.get('/about', (req, res) => {
  res.render('about', { menu });
});

// Contact page route
router.get('/contact', (req, res) => {
  res.render('contact', { menu });
});

module.exports = { router, menu };