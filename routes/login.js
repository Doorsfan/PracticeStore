//SERVER SIDE LOGIN SCRIPT

const express = require('express');
const router = express.Router();
const itemsJson = require('../public/jsonFiles/items.json');
const allItems = require('../public/jsonFiles/all_items.json');
const users = require('../public/jsonFiles/users.json');
const fs = require('fs');

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Mockup store 0.5v',
  });
});

router.get('/register', (req, res) => {
  res.render('register', {
    title: 'Register A New Account',
  });
});

//Work on fixing successful Login contra invalid, Body parsing works now
router.post('/login', (req, res) => {
  let instock = 0;
  let itemsInCart = 0;
  let foundUser = false;
  let foundPW = false;
  var farFuture = new Date(new Date().getTime() + 1000 * 60 * 15);
  res.cookie('logged_in', 'false', { expires: farFuture });

  users.Users.forEach((element) => {
    if (
      element.username == req.body.Username &&
      element.password == req.body.Password
    ) {
      foundUser = true;
      foundPW = true;
      if (element.activated == 'true') {
        res.cookie('logged_in', 'true', { expires: farFuture });
        res.cookie('username', element.username, { expires: farFuture });
        res.render('store_front_logged_in', {
          title: "Mikael's Shop",
          itemsInCart: 0,
          items: allItems.All
        });
      } else {
        res.render('login', {
          title: 'Mockup Store v0.5',
          invalidUsername:
            'Account must be validated first, check your e-mail.',
        });
      }
    }
  });
  if (!foundUser || !foundPW) {
    res.render('login', {
      title: 'Mockup Store v0.5',
      invalidUsername: 'Invalid username, please try again',
      invalidPassword: 'Invalid password, please try again',
    });
  }

  /*
  fs.writeFile('./public/items.json', buildJson(),function (err) {
      if (err) throw err;
  }); 
  res.render('store_front', {
      title: 'Mikaels Shop',
      items: itemsJson,
      stock: instock,
      itemsInCart: itemsInCart,
  }); */
});

/*{
    "All": [
    ],
    "Computers": [
    ],
    "Phones": [
    ],
    "Screens": [
    ],
    "TV": [
    ],
    "Headphones": [
    ]
} */

function buildAllProducts() {
  let toBuild = '';
  let counter = 1;
  allItems.All.forEach((element) => {
    toBuild +=
      '        { "product_id": "' +
      element.product_id +
      '", "name": "' +
      element.name +
      '", "price": "' +
      element.price +
      '", "sale": "' +
      element.sale +
      '"}';
    if (allItems.All.length != counter) {
      toBuild += ',\n';
    }
    counter += 1;
  });
  return toBuild;
}

function buildComputers() {
  let toBuild = '';
  let counter = 1;
  allItems.Computers.forEach((element) => {
    toBuild +=
      '        { "product_id": "' +
      element.product_id +
      '", "name": "' +
      element.name +
      '", "price": "' +
      element.price +
      '", "sale": "' +
      element.sale +
      '"}';
    if (allItems.Computers.length != counter) {
      toBuild += ',\n';
    }
    counter += 1;
  });
  return toBuild;
}

function buildPhones() {
  let toBuild = '';
  let counter = 1;
  allItems.Phones.forEach((element) => {
    toBuild +=
      '        { "product_id": "' +
      element.product_id +
      '", "name": "' +
      element.name +
      '", "price": "' +
      element.price +
      '", "sale": "' +
      element.sale +
      '"}';
    if (allItems.Phones.length != counter) {
      toBuild += ',\n';
    }
    counter += 1;
  });
  return toBuild;
}

function buildScreens() {
  let toBuild = '';
  let counter = 1;
  allItems.Screens.forEach((element) => {
    toBuild +=
      '        { "product_id": "' +
      element.product_id +
      '", "name": "' +
      element.name +
      '", "price": "' +
      element.price +
      '", "sale": "' +
      element.sale +
      '"}';
    if (allItems.Screens.length != counter) {
      toBuild += ',\n';
    }
    counter += 1;
  });
  return toBuild;
}

function buildTVs() {
  let toBuild = '';
  let counter = 1;
  allItems.TV.forEach((element) => {
    toBuild +=
      '        { "product_id": "' +
      element.product_id +
      '", "name": "' +
      element.name +
      '", "price": "' +
      element.price +
      '", "sale": "' +
      element.sale +
      '"}';
    if (allItems.TV.length != counter) {
      toBuild += ',\n';
    }
    counter += 1;
  });
  return toBuild;
}

function buildHeadPhones() {
  let toBuild = '';
  let counter = 1;
  allItems.Headphones.forEach((element) => {
    toBuild +=
      '        { "product_id": "' +
      element.product_id +
      '", "name": "' +
      element.name +
      '", "price": "' +
      element.price +
      '", "sale": "' +
      element.sale +
      '"}';
    if (allItems.Headphones.length != counter) {
      toBuild += ',\n';
    }
    counter += 1;
  });
  return toBuild;
}

module.exports = router;
