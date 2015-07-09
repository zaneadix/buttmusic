
import React from 'react';
import dispatcher, {ACTIONS} from '../../dispatcher';

export default React.createClass({

  displayName: 'Track',

  render () {

    return (
      <li>
        <h3>{this.props.track.title}</h3>
        <button onClick={this.handlePlay}>play</button>
      </li>
    )
  },

  handlePlay () {

    dispatcher.dispatch({

      action: ACTIONS.PLAY,
      track: this.props.track
    })
  }
})
