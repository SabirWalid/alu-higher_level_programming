#!/usr/bin/node
const request = require('request');
const fs = require('fs');

request(process.arg[2], function (err, response, body) {
  if (err == null) {
    fs.writeFileSync(process.argv[3], body);
  }
});
