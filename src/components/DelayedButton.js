import React, { Component } from 'react'

export default class DelayedButton extends Component {


  delayCallback = (e) => {
    e.persist()
    this.props.onDelayedClick(e)
  }

  render() {
    return <button onClick={(e) => setTimeout(() => this.delayCallback(e), this.props.delay)}>delayed button</button>
  }
}
