const fetch = require('node-fetch');
const mobilenet = require('@tensorflow-models/mobilenet');
const tfnode = require('@tensorflow/tfjs-node');

const debug = require('debug')('app:classify-images');

async function ImageClassification() {
  const mobilenetModel = await mobilenet.load();

  return async function getImageClassification(mediaUrl) {
    debug(`classifying:${mediaUrl}`);

    const response = await fetch(mediaUrl);
    const imageBuffer = await response.buffer();
    const tfimage = tfnode.node.decodeImage(imageBuffer);

    const classification = await mobilenetModel.classify(tfimage);

    return classification;
  };
}

module.exports = ImageClassification;
