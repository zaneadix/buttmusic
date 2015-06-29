
import request from 'request';
import qs from 'querystring';
import global from './../../app/global';

var controller = {

  get: function (req, res, next) {

    var scUrl = global.scExplore + '/metal';

    request(scUrl, function (error, response, body) {

      if (error) {

        console.log(error);

      } else {

        res.status(response.statusCode).json(body);
      }

      next();

    });
  }
};

export default controller;
