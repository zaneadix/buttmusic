
import React from 'react';
import TrackView from './trackView';

export default React.createClass({

  displayName: 'TrackList',

  render () {

    var tracks = this.props.tracks.map(function (track) {
      return (
        <TrackView key={track.id} title={track.title} />
      );
    });

    return (
      <ul className="trackList">
        {tracks}
      </ul>
    )
  }
})
