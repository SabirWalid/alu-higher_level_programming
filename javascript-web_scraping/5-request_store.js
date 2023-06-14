#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request.get({
  uri: url,
  encoding: 'utf-8'
}, function (err, res, body) {
  if (err) {
    console.error(err);
    return;
  }
  fs.writeFile(filePath, body, function (err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`File saved to ${filePath}`);
  });
});
