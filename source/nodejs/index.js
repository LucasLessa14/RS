const express = require('express');
const ejs = require('ejs');
const app = express();

const PORT = 80;
const HOST = '0.0.0.0';

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);