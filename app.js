/*modules require */
const express = require("express")
const path = require("path");
const http = require('http');
const https = require('https');
const app = express();
const fs = require('fs');
const utf8 = require('utf8');
const base45 = require('base45');
const cbor = require('cbor');
const pako = require('pako');
const ejs = require('ejs');
const bodyParser = require("body-parser");

/*file declaration */
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));
app.get('/', (req, res) => {
  res.render('index');
});


/*function request */
app.post("/request", (req, res) => {
  const cod = (req.body.name);
  const greenpassBody = cod.substr(4);
  // base45 encoded
  const decodedData = base45.decode(greenpassBody);
  //unzip
  const output = pako.inflate(decodedData);
  const results = cbor.decodeAllSync(output);
  [headers1, headers2, cbor_data, signature] = results[0].value;
  const greenpassData = cbor.decodeAllSync(cbor_data);
  let decod = (JSON.stringify(greenpassData[0].get(-260).get(1), null, 2));
  res.render('print', { decod: decod });
});




/*server setup */
http.createServer(app).listen(3000);

