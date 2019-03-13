import React from 'react'


function DelayedButton(props){


const test = (e) => {
  e.persist()
  setTimeout((e) => props.onDelayedClick(e), props.delay)
}
  return(
    <button onClick={test}/>
  )
}



export default DelayedButton;
