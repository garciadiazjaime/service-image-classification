const fetch = require('node-fetch');
require('@tensorflow-models/mobilenet');
require('@tensorflow/tfjs-node');

const debug = require('debug')('app:classify-images');

async function getImage(mediaUrl) {
  const response = await fetch(mediaUrl);
  const imageBuffer = await response.buffer();

  return imageBuffer;
}

async function ImageClassification(mediaUrl) {
  debug(`classifying:${mediaUrl}`);

  await getImage(mediaUrl);

  return [];
}

module.exports = ImageClassification;
