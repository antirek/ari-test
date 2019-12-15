
const client = require('ari-client');
const config = require('config');

client.connect(config.url, config.username, config.password)
  .then(function (ari) {
    console.log('connect');
    console.log(ari);
  })
  .catch(function (err) {
    console.log(err);
  });


