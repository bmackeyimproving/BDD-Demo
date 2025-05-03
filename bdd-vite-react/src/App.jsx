import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import Greeting from './Greeting';
import Farewell from './Farewell';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>BDD</h1>
      <div className="card">
        <HelloWorld />
        <Greeting name="Alice" />
      </div>
    </>
  )
}

export default App
