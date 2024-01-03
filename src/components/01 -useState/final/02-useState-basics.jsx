import { useState } from 'react'

const UseStateBasics = () => {
    // console.log(useState(1));
    // const value =(useState("hello")[0])
    // const func = useState('hello')[1]
    // console.log(value)
    // console.log(func)
    const [count,setCount] = useState(0)
    const handleClick = () =>{
        // setCount(count +1)
        setCount("pants")
    }
  return (
    <div>
        <h5>you clicked: {count} times</h5>
      <button type="button" className='btn' onClick={handleClick} >Click</button>
    </div>
  )
}

export default UseStateBasics
