const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// GET all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.render('orders/index', { orders });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// GET create order form
router.get('/create', (req, res) => {
  res.render('orders/create');
});

// POST create Order
router.post('/', async (req, res) => {
  try {
    const { orderDate, totalPrice, orderStatus, shippingAddress, deliveryStatus, paymentAddress } = req.body;
    const order = new Order({ orderDate, totalPrice, orderStatus, shippingAddress, deliveryStatus, paymentAddress });
    const savedOrder = await order.save();
    console.log('Order saved:', savedOrder); // Log the saved order
    res.redirect('/orders');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// GET edit order form
router.get('/:id/edit', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.render('orders/edit', { order });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// PUT update order
router.put('/:id', async (req, res) => {
  try {
    const { orderDate, totalPrice, orderStatus, shippingAddress, deliveryStatus, paymentAddress } = req.body;
    await Order.findByIdAndUpdate(req.params.id, { orderDate, totalPrice, orderStatus, shippingAddress, deliveryStatus, paymentAddress });
    res.redirect('/orders');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// DELETE order
router.delete('/:id', async (req, res) => {
  try {
    await Order.findByIdAndRemove(req.params.id);
    res.redirect('/orders');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
