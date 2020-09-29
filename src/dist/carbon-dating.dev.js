"use strict";

var CustomError = require("../extensions/custom-error");

var MODERN_ACTIVITY = 15;
var HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || Number(sampleActivity) > MODERN_ACTIVITY || Number(sampleActivity) <= 0 || isNaN(parseFloat(sampleActivity))) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (Math.log(2).toFixed(3) / HALF_LIFE_PERIOD));
};