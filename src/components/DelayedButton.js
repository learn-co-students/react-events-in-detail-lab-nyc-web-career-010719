import React, { Component } from 'react'

class DelayedButton extends Component {
  render() {
    return (
      <button onClick={this.delayClick}>delay button</button>
    )
  }

  delayClick = (e) => {
    setTimeout(() => this.props.onDelayedClick(e), this.props.delay )
  }
}

export default DelayedButton
