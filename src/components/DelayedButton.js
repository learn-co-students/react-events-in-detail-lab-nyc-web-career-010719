// Code DelayedButton Component Here
import React from "react";

class DelayedButton extends React.Component {

  handleOnDelayedClick = (e) => {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  };

  render() {
    return (
      <div>
      <button onClick={this.handleOnDelayedClick}> I yam a button and I will delay u</button>
      </div>
    )
  }
}
export default DelayedButton
