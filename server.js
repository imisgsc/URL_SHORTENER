const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const urlMap = new Map();
const baseUrl = 'http://localhost:3000/';

function generateShortLink() {
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += char.charAt(Math.floor(Math.random() * char.length));
  }
  return result;
}

app.post('/shorten', (req, res) => {
  const originalUrl = req.body.url;
  const shortUrl = generateShortLink();
  urlMap.set(shortUrl, originalUrl);
  res.json({ shortUrl: baseUrl + shortUrl });
});

app.get('/:shortUrl', (req, res) => {
  const originalUrl = urlMap.get(req.params.shortUrl);
  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.status(404).send('URL not found');
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
