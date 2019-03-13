// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

  constructor(props){
    super(props)
  }

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>Click me!</button>
    )
  }
} //end CoordinatesButton class

export default CoordinatesButton
