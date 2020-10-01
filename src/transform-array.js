const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

    if (!arr) throw new Error();

    if (arr.length === 0) return arr;

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {

            case '--discard-next':
                i++;
                break;

            case '--discard-prev':
                if (result.length !== 0 && arr[i - 2] !== '--discard-next')
                    result.pop();
                break;

            case '--double-next':
                if (i + 1 !== arr.length)
                    result.push(arr[i + 1]);
                break;

            case '--double-prev':
                if (i !== 0 && arr[i - 2] !== '--discard-next')
                    result.push(arr[i - 1]);
                break;

            default:
                result.push(arr[i]);
        }
    }
    return result;

};