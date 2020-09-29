const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

    if (!members) {
        return false;
    }

    let arr = [];
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
            arr.push(members[i].trim());
        }
    }

    let arrNameTeam = [];
    for (let i = 0; i < arr.length; i++) {
        arrNameTeam.push(arr[i][0].toUpperCase())
    }

    if (arrNameTeam.length === 0) {
        return false
    } else return (arrNameTeam.sort().join(''));

}