'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function config(app, express, routes) {

  app.set('port', 9000);
  app.set('base url', 'http://localhost');

  app.use(_bodyParser2['default'].json());
  app.use(_bodyParser2['default'].urlencoded({ extended: true }));

  app.use(express['static'](__dirname + '/../../client'));

  app.use('/', routes.ExploreRouter);
}

exports['default'] = config;
module.exports = exports['default'];