const express = require('express');
const router = express.Router();
const itemsJson = require('../public/jsonFiles/items.json');

router.get('/', (req, res) => {
  res.render('Computers', {
    title: 'DAVAAAAAAAAAAAAAAAAAJ',
    stock: instock,
    itemsInCart: itemsInCart
  });
});

module.exports = router;