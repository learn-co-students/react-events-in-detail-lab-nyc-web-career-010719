// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {

  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return (
      <div>
      <button onClick={(e) => this.handleClick(e)}> I yam a button. I will give you coordinates </button>
      </div>
    )
  }
}
export default CoordinatesButton
