const express = require('express');
const debug = require('debug')('app:index');

const getImageClassification = require('./get-image-classification');

const { PORT = 3030 } = process.env;
const app = express();

app.get('/', (req, res) => {
  res.send(':)');
});

app.get('/image/classification', async (req, res) => {
  const { mediaUrl } = req.query;

  if (!mediaUrl) {
    return res.send('EMPTY_IMAGE_URL');
  }

  const classification = await getImageClassification(mediaUrl);

  return res.send(classification);
});

app.listen(PORT, () => debug(`Listening on ${PORT}`));
