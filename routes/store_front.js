const express = require('express');
const router = express.Router();
const allItems = require('../public/jsonFiles/all_items.json');

router.get('/', (req, res) => {
  let items = 0;
  console.log("req cookies were: " + req.cookies.logged_in);
  if (req.cookies.logged_in === "true") {
    var farFuture = new Date(new Date().getTime() + (1000 * 60 * 15)); //15 minutes timer
    res.cookie('logged_in', 'true', { expires: farFuture });
    res.cookie('username', req.cookies["username"], { expires: farFuture });
    if (typeof req.cookies['itemsInCart'] !== 'undefined') {
      item = parseInt(req.cookies['itemsInCart']);
    }
    allItems.All.forEach(element => {
      if (typeof req.cookies[element.name] !== 'undefined') {
        items += parseInt(req.cookies[element.name]);
      }
    })
    res.render('store_front_logged_in', {
      title: "Mikael's Shop",
      itemsInCart: items,
      items: allItems.All
    });
  }
  else {
    res.render('storefront_not_logged_in', {
      title: "Mikaels Shop",
      items: allItems.All
    });  
  }
})

module.exports = router;