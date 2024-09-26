import { useState } from 'react'
import Options from './component/options'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Options/>
    </>
  )
}

export default App
