import app from 'ampersand-app';
import React from 'react';
import trackStore from './components/track/trackStore';
import router from './router'

window.app = app;

app.extend({

  init () {

    trackStore.fetch();

    console.log(router);

    router.history.start();
  }

});

app.init();
