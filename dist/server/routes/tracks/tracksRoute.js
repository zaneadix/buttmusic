'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _tracksController = require('./tracksController');

var _tracksController2 = _interopRequireDefault(_tracksController);

exports['default'] = function (router) {

  router.route('/tracks').get(_tracksController2['default'].get);
};

module.exports = exports['default'];