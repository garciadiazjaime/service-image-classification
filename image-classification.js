const fetch = require('node-fetch');

const debug = require('debug')('app:classify-images');

async function getImageClassification(mediaUrl) {
  debug(`classifying:${mediaUrl}`);

  const response = await fetch(mediaUrl);
  const imageBuffer = await response.buffer();
  debug(imageBuffer.length);

  return [];
}

module.exports = getImageClassification;
