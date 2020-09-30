const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {

    let tower = {};
    tower.turns = Math.pow(2, diskNumber) - 1;
    tower.seconds = parseInt(tower.turns / (turnsSpeed / 3600));
    return tower;
};