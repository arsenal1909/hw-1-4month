import { useState } from 'react';
import './App.css';

function App() {


  const [state, setState] = useState(0)
  function add() {
    setState(state + 1)
  }
  function remuve() {
    setState(state - 1)
  }

  function plust() {
    setState(state + 10)
  }

  function minus() {
    setState(state - 10)
  }
  function divide() {
    setState(state % 10)
  }
  function multiply() {
    setState(state * 10)
  }

  

  return (
    <div className="App">






      <h1>{state}</h1>
      
      <button onClick={multiply}>*10</button> 
      <button onClick={plust}>+10</button> 
      <button onClick={add}>incriment</button>
      <button onClick={remuve}>dicriment</button>
      <button onClick={minus}>-10</button>
      <button onClick={divide}>%10</button>

    </div>
  );
}

export default App;
