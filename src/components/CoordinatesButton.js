import React from 'react'


function CoordinatesButton(props){

let test = (e) => {
    props.onReceiveCoordinates([e.clientX, e.clientY])
  }


  return(
    <button onClick={(e) => test(e)}/>
  )
}



export default CoordinatesButton;
