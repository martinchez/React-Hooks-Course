import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Starter from './components/01 -useState/starter/02-useState-basics'
import Final from './components/01 -useState/final/02-useState-basics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      {/* <Starter /> */}
      <Final />
    </div>
  )
}

export default App
