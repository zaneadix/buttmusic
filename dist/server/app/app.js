'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _routesExploreExploreRoute = require('./../routes/explore/exploreRoute');

var _routesExploreExploreRoute2 = _interopRequireDefault(_routesExploreExploreRoute);

// Init
var app = (0, _express2['default'])();
var routes = {};

// Routes
var ExploreRouter = _express2['default'].Router();
routes.ExploreRouter = ExploreRouter;

(0, _config2['default'])(app, _express2['default'], routes);

(0, _routesExploreExploreRoute2['default'])(ExploreRouter);

exports['default'] = app;
module.exports = exports['default'];