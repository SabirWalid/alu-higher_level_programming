#!/usr/bin/node
const fs = require('fs');
const filepath = process.argv[2];
const stringTowrite = process.argv[3];

fs.writeFileSync(filepath, stringTowrite, 'utf-8', function (error) {
  if (error) {
    console.error(error);
  }
});
