import React from 'react'
import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  return (
    <div>
      <h1>use state array</h1>
    </div>
  )
}

export default UseStateArray
