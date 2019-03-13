import React from 'react';

export default class DelayedButton extends React.Component{

  handleClick = (event) => {
    // console.log(this.props)
    event.persist()
    return this.props.onDelayedClick(event, this.props.delay)
    // setTimeout(this.props.onDelayedClick(event), this.props.delay)
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
      >
        DelayedButton
      </button>
    )
  }


}
