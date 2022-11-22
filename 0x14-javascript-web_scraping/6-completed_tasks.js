#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

requets(url, funtion (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode == 200) {
    const completed = {};
    const tasks = JSON.parse(body);
    for (const i in tasks) {
      const task = tasks[i];
      if (tasks.completed === true] {
        if (completed[task.userID] === undefined) {
	  completed[task.userID] = 1;
	} else {
	  completed[task.userID]++;
	}	
      }
    }
    console.log(completde);
  } else {
    console.log('An error occured. status code: ' + response.statusCode);
  }
});
