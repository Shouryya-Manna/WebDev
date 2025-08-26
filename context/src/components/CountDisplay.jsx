import React, { useContext } from 'react'
import { useCount } from '../context/CountContext'


function CountDisplay() {
  const {count} = useCount() 
  return (
    <div>CountDisplay{count}</div>

  )
}

export default CountDisplay