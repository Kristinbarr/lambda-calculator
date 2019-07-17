import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button onClick={() => props.changeData(props.operatorObj.value)}>
        {props.operatorObj.char}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  )
};

export default OperatorButton;
