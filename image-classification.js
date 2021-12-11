const fetch = require('node-fetch');
const mobilenet = require('@tensorflow-models/mobilenet');
const tfnode = require('@tensorflow/tfjs-node');

const debug = require('debug')('app:classify-images');

async function getImage(mediaUrl) {
  const response = await fetch(mediaUrl);

  if (response.status === 403) {
    debug('INVALID_URL');
    return null;
  }

  const imageBuffer = await response.buffer();

  return imageBuffer;
}

async function ImageClassification() {
  const mobilenetModel = await mobilenet.load();

  return async function getImageClassification(mediaUrl, count) {
    debug(`classifying:${count}:${mediaUrl}`);

    const imageBuffer = await getImage(mediaUrl);
    if (!imageBuffer) {
      return [];
    }

    const tfimage = tfnode.node.decodeImage(imageBuffer);
    const classification = await mobilenetModel.classify(tfimage);

    return classification;
  };
}

module.exports = ImageClassification;
