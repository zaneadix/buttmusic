
import RestCollection from 'ampersand-rest-collection';
import TrackModel from './trackModel';
import dispatcher from './../../dispatcher';

class TrackStore extends RestCollection {

  get model () { return TrackModel; }

  get url () { return '/explore'; }

  constructor () { super(); }

  initialize () {

    dispatcher.register(this, this.dispatchCallback);
  }

  dispatchCallback (payload) {

  }

  hasChanged () {

    console.log('changed')
  }

  parse (data) {

    data = JSON.parse(data);

    console.log(data);

    return data.tracks;
  }
}

var trackStore = new TrackStore();

export default trackStore;
