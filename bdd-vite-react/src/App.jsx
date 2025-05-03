import './App.css'
import HelloWorld from './Components/HelloWorld'
import Greeting from './Components/Greeting';
import Adder from './Components/Adder';

function App() {
  return (
    <>
      <h1>BDD</h1>
      <div className="card">
        <HelloWorld />
        <Greeting name="Alice" />
        <Adder />
      </div>
    </>
  )
}

export default App
