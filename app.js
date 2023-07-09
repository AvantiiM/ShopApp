const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const connectDB = require('./db');
const { router: indexRoutes, menu } = require('./routes/index');

const signupRoutes = require('./routes/signup');
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');
const orderRoutes = require('./routes/orders');
const reviewRoutes = require('./routes/reviews');
const retrnRoutes = require('./routes/retrns');
const sellerRoutes = require('./routes/sellers');

// Create the Express application
const app = express();

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Pass the menu to all views
app.use((req, res, next) => {
  res.locals.menu = menu;
  next();
});

// Connect to MongoDB
connectDB();

// Use routes
app.use('/', indexRoutes);
app.use('/signup', signupRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/orders', orderRoutes);
app.use('/reviews', reviewRoutes);
app.use('/retrns', retrnRoutes);
app.use('/sellers', sellerRoutes);
//app.use('/users', userRoutes);
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
