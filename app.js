const geocode = require('./utils/geocode');
const forcast = require('./utils/forcast');

geocode('Osaka', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

forcast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
