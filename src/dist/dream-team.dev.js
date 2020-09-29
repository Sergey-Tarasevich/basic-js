"use strict";

var CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members) {
    return false;
  }

  var arr = [];

  for (var i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      arr.push(members[i].trim());
    }
  }

  var arrNameTeam = [];

  for (var _i = 0; _i < arr.length; _i++) {
    arrNameTeam.push(arr[_i][0].toUpperCase());
  }

  if (arrNameTeam.length === 0) {
    return false;
  } else return arrNameTeam.sort().join('');
};