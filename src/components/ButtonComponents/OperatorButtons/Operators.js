import React, { useState } from 'react'
import OperatorButton from './OperatorButton'
//import any components needed
import { operators } from '../../../data.js'
//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setOperatorState] = useState(operators)

  return (
    <div className='Operators'>
      {operatorsState.map((operatorObj) => (
        <OperatorButton
          operatorObj={operatorObj}
          changeData={props.changeData}
          key={operatorObj.value}
        />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/}
    </div>
  )
}

export default Operators
