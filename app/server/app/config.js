import bodyParser from 'body-parser'

function config (app, express, routes) {

  app.set('port', 9000);
  app.set('base url', 'http://localhost');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.use(express.static(__dirname + '/../../client'));

  app.use('/', routes.ExploreRouter);
}

export default config;
