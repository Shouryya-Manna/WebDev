import React, { useContext } from 'react'
import { CountContext, useCount } from './CountContext'

function CountDisplay() {
  const {count} = useCount() 
  return (
    <div>CountDisplay{count}</div>

  )
}

export default CountDisplay