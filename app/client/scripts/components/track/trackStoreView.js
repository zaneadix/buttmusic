
import React from 'react';
import TrackView from './trackView';

export default React.createClass({

  displayName: 'TrackStore',

  render () {

    var tracks = this.props.tracks.map(function (track) {
      return (
        <TrackView key={track.id} track={track} />
      );
    });

    return (
      <ul className="trackList">
        {tracks}
      </ul>
    )
  }
})
