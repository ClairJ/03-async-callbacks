'use strict';

const reader = module.exports = {};

const fs = require('fs');

reader.guide = function (arr, callback) {

  const paths = [];

  if(arr.length === 0) return null;

  fs.readFile(arr[0], (err, data) =>{
    if(err) return callback(err);
    paths.push(data.toString());

    fs.readFile(arr[2],(err, data) =>{
      if(err) return callback(err);
      paths.push(data.toString());

      fs.readFile(arr[3],(err, data) =>{
        if(err) return callback(err);
        paths.push(data.toString());
        callback(null, paths);
      });
    });
  });

};
