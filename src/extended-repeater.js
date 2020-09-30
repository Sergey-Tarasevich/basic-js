const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let result = ''
    this.str = toString(str) //str это строка, которая будет повторена

    let {
        repeatTimes = 1,
            separator = '+',
            addition = '',
            additionRepeatTimes = 1,
            additionSeparator = '|',
    } = options



    for (let i = 0; i < repeatTimes; i++) {
        result += str
        for (let j = 0; j < additionRepeatTimes; j++) {
            result += addition
            if (j + 1 < additionRepeatTimes) {
                result += additionSeparator
            }
        }
        if (i + 1 < repeatTimes) {
            result += separator
        }
    }
    return result
}