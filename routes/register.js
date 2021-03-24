const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
const Email = require('email-templates');
const path = require('path');
const users = require('../public/jsonFiles/users.json');
const fs = require('fs');
const credentials = require('../secret/credentials.json');

router.post('/register', (req, res) => {
  let new_email = '';
  let account_exists = false;
  users.Users.forEach((element) => {
    if (element.username === req.body.username) {
      res.render('register', {
        title: 'Register A New Account',
        invalidUsername:
          'The username: ' + req.body.username + ' is already taken.',
      });
      account_exists = true;
    }
  });
  if (!account_exists) {
    const email = new Email({
      juice: true,
      preview: false,
      juiceSettings: {
        tableElements: ['TABLE'],
      },
      juiceResources: {
        preserveImportant: true,
        webResources: {
          relativeTo: path.join(__dirname, '..', 'emails', 'register'),
        },
      },
      message: {
        from: 'mikaels.shop@gmail.com',
        attachments: [
          {
            filename: 'back.jpg',
            path: path.join(__dirname, '..', 'emails', 'register', 'back.jpg'),
            cid: 'back',
          },
        ],
        subject: 'Confirmation of Account Registration',
      },
      // uncomment below to send emails in development/test env:
      send: true,
      transport: {
        host: 'gmail.com',
        service: 'gmail',
        auth: {
          user: credentials.username,
          pass: credentials.password,
        },
      },
    });

    email
      .send({
        template: 'register',
        message: {
          to: 'mikael.rusin@gmail.com',
        },
        locals: {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
        },
      })
      .then('Sent an email! with the content of: ' + console.log)
      .catch(console.error);

    res.render('sent_email', {
      email: req.body.email,
      username: req.body.username,
    });
    let toBuild = '{    \n"Users": [\n';
    users.Users.forEach((element) => {
      toBuild +=
        '    {\n      "username":"' +
        element.username +
        '",\n      "activated":"' +
        element.activated +
        '",\n      "password":"' +
        element.password +
        '",\n      "email":"' +
        element.email +
        '"\n    }';
      toBuild += ',';
      toBuild += '\n';
    });
    toBuild +=
      '    {\n      "username":"' +
      req.body.username +
      '",\n      "activated":"false",\n      "password":"' +
      req.body.password +
      '",\n      "email":"' +
      req.body.email +
      '"\n    }\n';
    toBuild += '  ]\n}';
    fs.writeFile('./public/users.json', toBuild, function (err) {
      if (err) throw err;
    });
    //End of if Account does not exist
  }
});

function buildJson() {
  //{ "username": "john" }
  let toBuild = '';
  toBuild +=
    '{\n    "All": [\n        ' +
    buildAllProducts() +
    '\n    ],\n    "Computers": [\n' +
    buildComputers() +
    '\n    ],\n    "Phones": [\n' +
    buildPhones() +
    '\n    ],\n    "Screens": [\n' +
    buildScreens() +
    '\n    ],\n    "TV": [\n' +
    buildTVs() +
    '\n    ],\n    "Headphones": [\n' +
    buildHeadPhones() +
    '\n    ]\n}';
  return toBuild;
}

module.exports = router;
