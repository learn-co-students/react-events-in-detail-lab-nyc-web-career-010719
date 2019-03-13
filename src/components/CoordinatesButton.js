import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  constructor(props) {
    super(props)
  }

  mouseCoordinates = e => [e.clientX, e.clientY];

  render() {
    return (
      <button onClick={e => this.props.onReceiveCoordinates(this.mouseCoordinates(e))}>
        CoordinatesButton
      </button>
    )
  }
}
