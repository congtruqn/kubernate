const express = require('express');
const axios = require('axios');
// Constants
const PORT = process.env.PORT || 3000;

// App
const app = express();
app.get('/', async function (req, res) {
  try {
    //const a = await axios.get('https://tns.vn')
    console.log('');
  }
  catch (e) {
    console.log(e)
  }
  res.send('Hello world!');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);