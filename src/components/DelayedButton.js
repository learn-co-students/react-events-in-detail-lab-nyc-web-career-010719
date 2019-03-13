import React from "react";

class DelatedButton extends React.Component {

  handleClick = (e) => {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Delayed</button>
      </div>
    )
  }
}
export default DelatedButton
