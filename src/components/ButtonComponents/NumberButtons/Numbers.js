import React from "react";
import NumberButton from './NumberButton';
//import any components needed
import data from '../../../data.js';
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {data.numbers.map(number => <NumberButton number={number} /> )}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/}
    </div>
  );
};

export default Numbers
