"use strict";

var CustomError = require("../extensions/custom-error");

var chainMaker = {
  chain: [],
  getLength: function getLength() {
    return this.chain.length;
  },
  addLink: function addLink() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '( )';
    this.chain.push("( ".concat(value, " )"));
    return this;
  },
  removeLink: function removeLink(position) {
    if (!position || !Number.isInteger(position) || position > this.chain.length || position < 0) {
      this.chain = [];
      throw new Error('fail position');
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain: function reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain: function finishChain() {
    var result = this.chain.slice();
    this.chain = [];
    return result.join('~~');
  }
};
module.exports = chainMaker;