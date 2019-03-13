import React, { Component } from 'react'

class CoordinatesButton extends Component {
  render() {
    return (
      <button onClick={this.getCoordinates}>the coordinates button</button>
    )
  }

  getCoordinates = (e) => {
    let coordinates = [e.clientX, e.clientY]
    // console.log(this.props);
    this.props.onReceiveCoordinates(coordinates)
  }
}

export default CoordinatesButton
