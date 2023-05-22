const request = require('request');
const fs = require('fs');

request(process.argv[2], (error, response, body) => {
  fs.writeFile('/Users/jessesandhu/lighthouse/page-fetcher/index.html', body, err => {

    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${process.argv[3]}`);
  });
});