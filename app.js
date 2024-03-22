const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
// Constants
const PORT = process.env.PORT || 3000;

// App
const app = express();
app.get('/', async function (req, res) {
  try {
    var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
    var mystr = mykey.update('abc', 'utf8', 'hex')
    mystr += mykey.final('hex');
    
    console.log(mystr);
  }
  catch (e) {
    console.log(e)
  }
  res.send('Hello world 3!');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);