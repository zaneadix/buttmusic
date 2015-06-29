'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _appGlobal = require('./../../app/global');

var _appGlobal2 = _interopRequireDefault(_appGlobal);

var controller = {

  get: function get(req, res, next) {

    var scUrl = _appGlobal2['default'].scExplore + '/metal';

    (0, _request2['default'])(scUrl, function (error, response, body) {

      if (error) {

        console.log(error);
      } else {

        res.status(response.statusCode).json(body);
      }

      next();
    });
  }
};

exports['default'] = controller;
module.exports = exports['default'];