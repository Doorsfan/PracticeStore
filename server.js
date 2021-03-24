//SERVER SIDE NODE.JS SERVER FOR PRACTICE SHOP

// /my_account, DATABASE, /checkout, OTHER PRODUCT PICTURES,
// /searchItem, Reviews

const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const ngrok = require('ngrok');
const cron = require('node-cron');
var cookieParser = require('cookie-parser');
const app = express();


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

var loginRouter = require('./routes/login');
var storefrontRouter = require('./routes/store_front');
var registerRouter = require('./routes/register');
var validate = require('./routes/validate');
var inspectItemRouter = require('./routes/inspectItem'); //Declare routes here
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser()); //Whenever you use body parsers or Cookie parsers etc, stack them here
app.use('/', loginRouter); //Stack routes here, after middleware implementations
app.use('/', storefrontRouter);
app.use('/', registerRouter);
app.use('/', validate);
app.use('/', inspectItemRouter);






function buildJson(username, role, id, note) {
  let toBuild = "";
  toBuild += ',\n{\n  "username": "' + username + '",\n  "role": "' + role + '",\n  "id": "' + username + '",\n  "note":"' + note + '"\n}\n  ]\n}';
  return toBuild;
}

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}


const server = app.listen(80, () => {
  console.log(`Express running -> Port ${server.address().port}`);
}); 