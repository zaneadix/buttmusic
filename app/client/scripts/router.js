import Router from 'ampersand-router';

const AppRouter =  Router.extend({

  routes: {
    '': 'explore',
    'explore/:genre': 'explore',
    'explore/:genre/:page': 'explore'
  },

  explore (genre, page) {

    console.log('pants');

    if (genre) {
      console.log(genre);
    }

    if (page) {
      console.log(page);
    }
  }
});

var router = new AppRouter();

export default router;
