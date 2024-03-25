const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
// Constants
const PORT = process.env.PORT || 3000;

// App
const app = express();
app.get('/', async function (req, res) {
  try {
    var mykey = crypto.createCipher('aes-128-cbc', 'mypassworddsfds');
    var mystr = mykey.update('abc', 'utf8', 'hex')
    mystr += mykey.final('hex');
    
    console.log(process.env?.FRONTEND_VIRTUAL_HOST || process.env);
  }
  catch (e) {
    console.log(e)
  }
  res.send('Hello world 7!');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);