import React, { useState } from 'react';


const ChaildState = props => {
    props.func('chaildState');
    const [state, setState] = useState(10);
  return (
    <div>
      <h1>ChaildState</h1>
      <p>State is {state}</p>
      <button onClick={
        ()=>{
          setState(state+1);
          console.log(state);
        }}
        >Click</button>
    </div>
  )
}

export default ChaildState
