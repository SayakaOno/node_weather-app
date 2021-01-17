const request = require('request');
const { weatherUrl, mapUrl } = require('./apiURL');

request({ url: weatherUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    const {
      weather_descriptions,
      temperature,
      feelslike
    } = response.body.current;
    console.log(
      `${
        weather_descriptions[0]
      }. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`
    );
  }
});

request({ url: mapUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location services!');
  } else if (!response.body.features.length) {
    console.log('Unable to find location. Try another search.');
  } else {
    const [longitude, latitude] = response.body.features[0].center;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }
});
