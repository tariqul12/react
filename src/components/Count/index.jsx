import React, { useState } from 'react';

function Count() {
    let [count, setCount] = useState(10);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
  return (
    <div>
        <h1><span onClick={increment}>-</span> {count} <span onClick={decrement}>+</span></h1>
    </div>
  )
}

export default Count