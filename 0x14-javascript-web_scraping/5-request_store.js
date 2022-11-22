#!/usr/bin/node
const fs = require('fs');
const request = require('request');
request(process.argv[2]).pipe(fs.createWrtiteStream(process.argv[3]));
