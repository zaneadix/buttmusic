
import React from 'react';

export default React.createClass({

  displayName: 'Track',

  render () {

    return (
      <li onClick={this.play}>
        <h3>{this.props.title}</h3>
        <button>play</button>
      </li>
    )
  },

  play () {

    console.log('playing: ' + this.props.title);
  }
})
