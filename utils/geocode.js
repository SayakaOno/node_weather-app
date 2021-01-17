const request = require('request');
const { getMapUrl } = require('../apiURL');

const geocode = (address, callback) => {
  const url = getMapUrl(address);

  request({ url, json: true }, (error, { body: { features } }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (!features.length) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      const { center, place_name } = features[0];
      callback(undefined, {
        latitude: center[1],
        longitude: center[0],
        location: place_name
      });
    }
  });
};

module.exports = geocode;
