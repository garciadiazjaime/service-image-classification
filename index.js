require('newrelic');
const express = require('express');
const debug = require('debug')('app:index');

const ImageClassification = require('./image-classification');

let getImageClassification;

const { PORT = 3030 } = process.env;
const app = express();

app.get('/', (req, res) => {
  res.send(':)');
});

app.get('/image/classification', async (req, res) => {
  const { mediaUrl, count } = req.query;

  if (!mediaUrl) {
    return res.send('EMPTY_IMAGE_URL');
  }

  const classification = await getImageClassification(mediaUrl, count);

  return res.send(classification);
});

app.listen(PORT, async () => {
  getImageClassification = await ImageClassification();

  debug(`Listening on ${PORT}`);
});
