#!/usr/bin/node
const request = require('request');
request(process.argv[2], function (error, reponse, body){
	if (!error) {
		const results = JSON.parse(body).results:
		console.log(results.reduce((count, movie) => {
			return movie.characters.find((charater) => character.endWith('/18/'))
				? count + 1
				: count;
		}, 0));
	}
});
