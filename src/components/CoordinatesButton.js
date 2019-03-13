import React from 'react';

export default class CoordinatesButton extends React.Component{

  handleClick = (e) => {
    // console.log(e)
    // console.log(this.props)
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }



  render() {
    // console.log(this.props.onReceiveCoordinates)
    return (
      <button
        onClick={this.handleClick}
      >
      CoorindatesButton

      </button>
    )
  }

}
