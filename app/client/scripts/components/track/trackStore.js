import React from 'react';
import RestCollection from 'ampersand-rest-collection';
import TrackModel from './trackModel';
import TrackView from './trackView';
import TrackList from './trackStoreView';
import dispatcher, {ACTIONS} from './../../dispatcher';

const TrackStore = RestCollection.extend({

  model: TrackModel,

  url: '/explore',

  initialize () {

    console.log(dispatcher);

    dispatcher.register(this.dispatchCallback);

    this.on('sort', function () {

      React.render(
        <TrackList tracks={this.models} />,
        document.getElementById('heart')
      )

    })
  },

  parse (data) {

    data = JSON.parse(data);

    return data.tracks;
  },

  dispatchCallback (payload) {

    console.log(ACTIONS.PLAY === payload.action);

    switch (payload.action) {

      case ACTIONS.PLAY:

        payload.track.play()
    }
  }
})

var trackStore = new TrackStore();

export default trackStore;
