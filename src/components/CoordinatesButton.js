import React from "react";

class CoordinatesButtons extends React.Component {

  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Coordinates</button>
      </div>
    )
  }
}
export default CoordinatesButtons
