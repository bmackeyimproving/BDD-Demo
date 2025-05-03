import './App.css'
import HelloWorld from './HelloWorld'
import Greeting from './Greeting';
import Adder from './Adder';

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
