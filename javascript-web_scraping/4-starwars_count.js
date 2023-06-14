#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];
const characterUrl = 'https://swapi-api.alx-tools.com/api/people/18/';

request.get(characterUrl, function (err, res, body) {
  if (err) {
    console.log(err);
    return;
  }
  const character = JSON.parse(body);
  const filmsUrls = character.films;
  let count = 0;
  filmsUrls.forEach(function (filmUrl) {
    request.get(filmUrl, function (err, res, body) {
      if (err) {
        console.log(err);
        return;
      }
      const film = JSON.parse(body);
      console.log(film.title);
      count++;
      if (count === filmsUrls.length) {
        console.log(`Number of movies where Wedge Antilles is present: ${count}`);
      }
    });
  });
});
