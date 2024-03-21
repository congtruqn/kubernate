const express = require('express');
const axios = require('axios');
// Constants
const PORT = process.env.PORT || 3000;

// App
const app = express();
app.get('/', async function (req, res) {
  //const test = await axios.get('https://tns.vn');
  //console.log(test)
  res.send('test');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);