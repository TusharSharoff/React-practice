import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter] =useState(15)
  const addValue=()=>{
    setCounter((prev)=>prev +1)
    setCounter((prev)=>prev +1)
  }
  const removeValue=()=>{
    setCounter((prev)=>prev -1)
    setCounter((prev)=>prev -1)
  }
  return (
    <div className="App">
      <h1>React course with tushar {counter}</h1>
      <h2>Counter value:{counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>{" "}
      <button
      onClick={removeValue}
      >Remove value</button>
      <p>Footer:{counter}</p>
    </div>
  );
}

export default App;
