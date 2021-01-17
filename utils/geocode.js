const request = require('request');
const { getMapUrl } = require('../apiURL');

const geocode = (address, callback) => {
  const url = getMapUrl(address);

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (!response.body.features.length) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      const { center, place_name } = response.body.features[0];
      callback(undefined, {
        latitude: center[0],
        longitude: center[1],
        location: place_name
      });
    }
  });
};

module.exports = geocode;
