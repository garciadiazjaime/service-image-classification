const fetch = require('node-fetch');
const mobilenet = require('@tensorflow-models/mobilenet');

const debug = require('debug')('app:classify-images');

async function getImage(mediaUrl) {
  const response = await fetch(mediaUrl);
  const imageBuffer = await response.buffer();

  return imageBuffer;
}

async function ImageClassification() {
  await mobilenet.load();

  return async function getImageClassification(mediaUrl) {
    debug(`classifying:${mediaUrl}`);

    await getImage(mediaUrl);

    return [];
  };
}

module.exports = ImageClassification;
