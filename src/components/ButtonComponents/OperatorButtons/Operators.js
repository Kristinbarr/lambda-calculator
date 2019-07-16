import React from "react";
import OperatorButton from './OperatorButton'
//import any components needed
import data from '../../../data'
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {data.operators.map(operator => <OperatorButton operator={operator} />)}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/}
    </div>
  );
};

export default Operators
