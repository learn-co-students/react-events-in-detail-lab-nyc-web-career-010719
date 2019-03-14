// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }

  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Coordinate</button>
      </div>
    )
  }
}
export default CoordinatesButton
