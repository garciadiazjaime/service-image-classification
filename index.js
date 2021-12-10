const express = require('express');
const debug = require('debug')('app:index');

const ImageClassification = require('./image-classification');

let getImageClassification;

const { PORT = 3030 } = process.env;
const app = express();

function printMemory() {
  const used = process.memoryUsage();
  Object.keys(used).forEach((key) => {
    debug(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`); // eslint-disable
  });
  debug('\n');
}

app.get('/', (req, res) => {
  res.send(':)');
});

app.get('/image/classification', async (req, res) => {
  const { mediaUrl } = req.query;

  if (!mediaUrl) {
    return res.send('EMPTY_IMAGE_URL');
  }

  printMemory();
  const classification = await getImageClassification(mediaUrl);
  printMemory();

  return res.send(classification);
});

app.listen(PORT, async () => {
  getImageClassification = await ImageClassification();

  debug(`Listening on ${PORT}`);
});
