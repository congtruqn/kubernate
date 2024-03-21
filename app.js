const express = require('express');
const axios = require('axios');
// Constants
const PORT = process.env.PORT || 3000;

// App
const app = express();
app.get('/', async function (req, res) {
  try {
    const a = await axios.get('https://tns.vn')
    console.log(a);
  }
  catch (e) {
    console.log(e)
   }
  res.send('Hello world 11111 tru tran');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);