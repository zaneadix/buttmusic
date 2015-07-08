import React from 'react';
import RestCollection from 'ampersand-rest-collection';
import TrackModel from './trackModel';
import TrackView from './trackView';
import TrackList from './trackListView';
import dispatcher from './../../dispatcher';

const TrackStore = RestCollection.extend({

  model: TrackModel,

  url: '/explore',

  initialize () {

    dispatcher.register(this, this.dispatchCallback);

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
  }
})

var trackStore = new TrackStore();

export default trackStore;
