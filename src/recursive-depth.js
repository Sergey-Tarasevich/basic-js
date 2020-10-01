const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {

        if (!Array.isArray(arr)) return 0;

        return arr.reduce((a, b) => Math.max(a, this.calculateDepth(b)), 0) + 1;
    }

}