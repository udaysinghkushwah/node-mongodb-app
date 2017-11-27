const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
 // load mongoose package
 var MongoClient = require('mongodb').MongoClient;
 var assert = require('assert');
 var url = 'mongodb://udop:udop@ds113660.mlab.com:13660/udop_vivah';
 MongoClient.connect(url, function(err, db) {
   assert.equal(null, err);
   console.log("Connected correctly to server.");
   db.close();
 });

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

 