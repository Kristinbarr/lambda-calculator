import React from "react";

const NumberButton = (props) => {
  // this single button component gets passed the prop function 'changeData' from parent 'number.js' which passed it from grandparent 'app.js'.
  // the click handler here will invoke the changeData function(with the button number as an arg) and will pass up the prop number to the parent.
  /* Display a button element rendering the data being passed down from the parent container on props */
  // if the display is 0, change it to the current number clicked
  // if not, return the current display value next to the number clicked
  return (
      <button
      onClick={() => props.setDisplay(
        props.display === 0 ?
          props.number
          :
          `${props.display}${props.number}`
        )} >{props.number}</button>
  )
};

export default NumberButton;
