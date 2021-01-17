const request = require('request');
const url = require('./apiURL');

request({ url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
