const fs = require('fs')
const request = require('request');

let content = '';

request('http://www.example.edu/', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  content = body;

  fs.writeFile('./index.html', content, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
    console.log(`Downloaded and saved ${body.length} bytes to ./index.html`);
  })
});


