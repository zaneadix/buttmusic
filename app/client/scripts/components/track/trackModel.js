
import Model from 'ampersand-model';
import dispatcher from './../../dispatcher';

export default Model.extend({

  props: {

    title: 'string',
    id: 'number',
    duration: 'number',
    genre: 'string',
    streamUrl: 'string'
  },

  parse (data) {

    data.streamUrl = data.stream_url;
    delete data.stream_url;

    return data;
  },

  play () {

    console.log('PANTS');
  }
});
