
import React from 'react'
import { useNameContext } from '../context/NameContext'

function NameIO() {

  const {name,setName} = useNameContext();


  return (
    <div>
    <div>Hello {name}</div>
    <input onChange={(e)=>setName(e.target.value)}/>
    <button>Submit</button>
    </div>
  )
}

export default NameIO