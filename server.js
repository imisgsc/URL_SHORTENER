const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let urlMap = {};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

function generateShortLink() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortLink = '';
    for (let i = 0; i < 6; i++) {
        shortLink += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return shortLink;
}

app.post('/shorten', (req, res) => {
    const originalUrl = req.body.url;
    const shortUrl = generateShortLink();
    urlMap[shortUrl] = originalUrl;
    res.send({ shortUrl: `${req.protocol}://${req.get('host')}/${shortUrl}` });
});

app.get('/:shortUrl', (req, res) => {
    const shortUrl = req.params.shortUrl;
    const originalUrl = urlMap[shortUrl];
    if (originalUrl) {
        res.redirect(originalUrl);
    } else {
        res.status(404).send('URL not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
