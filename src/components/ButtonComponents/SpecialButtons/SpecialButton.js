import React from "react";

const SpecialButton = (props) => {
  /* Display a button element rendering the data being passed down from the parent container on props */
  return (
    <button onClick={() => props.setDisplay(0)}>{props.special}</button>
  )
}

export default SpecialButton;
