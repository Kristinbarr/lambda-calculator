import React, { useState } from 'react'
import NumberButton from './NumberButton'
//import any components needed
import { numbers } from '../../../data.js'
//Import your array data to from the provided data file

// KB: Numbers contains individual buttons, takes in changeData prop from app.js
const Numbers = (props) => {

  const [numbersState, setNumber] = useState(numbers)
  // KB: if you don't use the setter 'setNumber', can you omit it from the declaration?

  // STEP 2 - add the imported data to state
  return (
    <div>
      {numbersState.map((number) => (
        <NumberButton
          number={number}
          changeData={props.changeData}
          key={number}
        />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/}
    </div>
  )
}

export default Numbers
