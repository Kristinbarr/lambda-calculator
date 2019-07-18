import React from "react";

const OperatorButton = (props) => {
  /* Display a button element rendering the data being passed down from the parent container on props */
  //
  console.log('operator',props)
  return (
    <button onClick={() => {
      props.operator.char === '=' ?
        props.setDisplay(eval(props.display))
        :
        props.setDisplay(`${props.display}${props.operator.value}`)
    }}
    >{props.operator.char}</button>
  )
};

export default OperatorButton;
