'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exploreController = require('./exploreController');

var _exploreController2 = _interopRequireDefault(_exploreController);

exports['default'] = function (router) {

  router.route('/explore').get(_exploreController2['default'].get);
};

module.exports = exports['default'];