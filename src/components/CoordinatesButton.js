// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {


  handleClick = (e) => {
    let mouseCoordinates = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(mouseCoordinates)
  }

  render() {
    return <div>
    <button class="button" onClick={(e)=>this.handleClick(e)}>
    coordinates button
    </button>
    <p>{this.props.onReceiveCoordinates}</p>
  </div>
  }

}
