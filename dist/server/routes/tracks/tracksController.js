'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var controller = {

  get: function get(req, res, next) {

    console.log(req.body);
  }
};

exports['default'] = controller;
module.exports = exports['default'];