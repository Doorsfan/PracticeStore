const express = require('express');
const router = express.Router();
const allItems = require('../public/jsonFiles/all_items.json');
const ratings = require('../public/jsonFiles/ratings.json');
const fs = require('fs');

router.get('/inspectItem', (req, res) => {
  //Given that Query params are optional, they can be used in conjunction with path registration
  //on the basis of the the base name is valid - but the Query param defines the ID selected and
  //potential info about the said item
  let name = req.query.name;
  console.log("Req query name when inspectin was: " + name);
  let message = req.body.message;
  let loggedInUser = req.cookies["username"];
  if (typeof loggedInUser === "undefined") {
    loggedInUser = "Not logged in";
  }

  allItems.All.forEach(element => {
    if (element.name == req.query.name) {
        let amount = 0;
        if (typeof req.cookies['itemsInCart'] !== "undefined") {
          amount = parseInt(req.cookies['itemsInCart'], 10);
        }
        console.log("Amount was: " + amount);
        res.render('inspectItem', {
        product_id: element.product_id,
        name: element.name,
        price: element.price,
        sale: element.sale,
        stock: "temp",
        itemsInCart: amount,
        reviews: ratings.reviews,
        loggedInUser: loggedInUser
      });
    }
  });
});

router.post('/inspectItem', (req, res) => {
  console.log("MIN AUTOMAT KARBIN OCH JAG.");
  let name = req.query.name;
  let review = req.query.review;
  let message = req.body.message;
  let loggedInUser = req.cookies['username'];
  console.log("review was: " + review);
  console.log("message was: " + message);
  let amount = 0;
  if (typeof req.cookies['itemsInCart'] !== "undefined") {
    amount += parseInt(req.cookies['itemsInCart'],10);
  }
  amount += parseInt(req.body.amount,10); //The amount requested
  var farFuture = new Date(new Date().getTime() + (1000 * 60 * 15));

  
  allItems.All.forEach(element => {
    if (element.name == req.query.name) {
      if (typeof review !== "undefined") {
        if (review === "true" && typeof review !== "undefined" && message.length > 0) {
          //Implement so that reviews file is updated
          console.log("soldat till salu, legoknäckt!");
          /* "username": "Mikael", "rating": "***", "remaining": "**", "text": "I found this product very helpful", "date": "2021/05/03" */

          fs.readFile('./public/jsonFiles/ratings.json', function (err, data) {
            console.log('Reading from file was: ' + data);
            fs.stat('./public/jsonFiles/ratings.json', (err, stats) => {
              fs.truncate(
                './public/jsonFiles/ratings.json',
                stats.size - 9,
                (err) => {
                  if (err) throw err;
                  console.log('truncated json');
                }
              );
              fs.appendFile(
                './public/jsonFiles/ratings.json',
                '},\n    {\n      "username": "' +
                  loggedInUser +
                  '", "rating": "***", "remaining": "**", "text": "' +
                  message +
                  '", "date": "2021-06-03",  "product": "' +
                  req.query.name +
                  '"\n    }\n  ]\n}',
                function (err) {
                  if (err) throw err;
                  console.log('Appended items to JSON');
                  console.log('Before render, ratings reviews was: ');
                  let user = {
                    username: loggedInUser,
                    rating: '***',
                    remaining: '**',
                    text: message,
                    date: '2021-06-03',
                    product: req.query.name
                  };
                  ratings.reviews.push(JSON.parse(JSON.stringify(user)));
                  res.render('inspectItem', {
                    product_id: element.product_id,
                    name: element.name,
                    price: element.price,
                    sale: element.sale,
                    stock: 'temp',
                    itemsInCart: amount,
                    reviews: ratings.reviews,
                  });
                }
              );
              console.log('THIS IS AFTER APPENDING TO THE FILE');
            });
          });
          console.log("SHOULD HAVE GONE HERE WHEN POSTED REVIEW.");
        }
      }
      else {
        res.cookie(name, amount, { expires: farFuture });
        res.cookie('itemsInCart', amount); //A cookie with no expiration date is a Session based cookie
        res.render('inspectItem', {
          product_id: element.product_id,
          name: element.name,
          price: element.price,
          sale: element.sale,
          stock: 'temp',
          itemsInCart: amount,
          reviews: ratings.reviews,
        });
      }
    }
  });
})

module.exports = router;