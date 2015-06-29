import express from 'express';
import config from './config';
import exploreRoute from './../routes/explore/exploreRoute';

// Init
var app = express();
var routes = {};

// Routes
var ExploreRouter = express.Router();
routes.ExploreRouter = ExploreRouter;

config(app, express, routes);

exploreRoute(ExploreRouter);

export default app;
