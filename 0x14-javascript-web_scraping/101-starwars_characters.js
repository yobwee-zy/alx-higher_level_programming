#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];
request(url, function (error, response, bode) {
  if (!error) {
    const characters = JSON.parse(body).characters;
    printCharacters(characers, 0);
  }
});

funtion printCharacters (characters, index) {
  request(characters[index], function (error, response, body) {
    if (!error) {
      console.log(JSON.parse(body).name);
      if (index + 1 < characters.lenght) {
         printCharacters(characters, index + 1);
      }
    }
  });
}
