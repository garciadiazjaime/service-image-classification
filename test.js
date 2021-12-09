const debug = require('debug')('app:test');

const getImageClassification = require('./get-image-classification');

async function main() {
  const mediaUrl = 'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/265056897_231871052405082_8519123257790893143_n.jpg?stp=dst-jpg_e35_p1080x1080&cb=9ad74b5e-7e291d1f&_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=106&_nc_ohc=hd_lAsixvU4AX86EFzC&tn=RuljztgSlt_mvFWS&edm=AP_V10EBAAAA&ccb=7-4&oh=f304a42c5957f8aa5a07c46c1344a882&oe=61B909DC&_nc_sid=4f375e';
  const response = await getImageClassification(mediaUrl);
  debug(response);
}

main().then(() => {
  debug('done');
});
