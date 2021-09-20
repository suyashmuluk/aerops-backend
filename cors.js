const express = require("express");
const app = express();
const cors = require("cors");

const whiteList = ["http://localhost:4200", "http://www.aeropsfm.com"];

var corsOptionDelegate = (req, callback) => {
  var corsOptions;
  if (whiteList.indexOf(req, header("Origin")) !== -1) {
    corsOption = { origin: true };
  } else {
    corsOption = { origin: false };
  }
  callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionDelegate);
