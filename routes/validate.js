const express = require('express');
const router = express.Router();
const fs = require('fs');
const users = require('../public/jsonFiles/users.json');

router.get('/validate', (req, res) => {
  res.render('validate', {
    email: req.body.email
  });
  console.log("get request was made");
});

router.post('/validate', (req, res) => {
  //Look into appending at specific file indexes instead of Writing and only modifying
  //certain indexes with FS write

  var data = fs.readFileSync('./public/users.json').toString().split("\n");
  let counter = 0;
  let lineToReplace = 0;
  data.forEach(element => {
    if (element.includes('"username":"' + req.body.username + '"')) {
      lineToReplace = counter;
    }
    counter += 1;
  })
  data.splice(lineToReplace+1, 1, '      "activated":"true",');
  var text = data.join("\n");  
  fs.writeFile('./public/users.json', text, function (err) {
    if (err) return console.log(err);
  });
  
  res.render('validate', {
    username: req.body.username,
    email: req.body.email
  });
  
})

module.exports = router;