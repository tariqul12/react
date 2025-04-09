import React from 'react';
import ChaildState from './ChaildState';

const State = () => {
     function getState(content)
    {
        console.log(content);
    }
  return (
    <div>
      <h1>State</h1>
      <ChaildState func={getState} />
    </div>
  )
}

export default State
