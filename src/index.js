import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

this.setCoordinates = (array) => {
  console.log(array)
}

this.handleDelayedClick = (event, time) => {
  // debugger
  // console.log(event)
  // console.log(time)
  // event.persist()
  setTimeout(() => {console.log(event)}, time)
}

ReactDOM.render(

  <div>
    <CoordinatesButton onReceiveCoordinates={this.setCoordinates} />
    <DelayedButton onDelayedClick={this.handleDelayedClick} delay={1500} />
  </div>,
  document.getElementById('global')
);



// <CoordinatesButton onReceiveCoordinates={ mouseCoordinates => console.log(mouseCoordinates) } />
