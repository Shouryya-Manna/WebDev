import React from 'react'
import { useCount } from './CountContext'

function CountUpdate() {

    const {count,setCount} = useCount();

    function handleCount(){
        setCount(count+1);
    }

  return (
    <div>
        <button
        onClick={handleCount}>Click</button>
    </div>
  )
}

export default CountUpdate