import { useState } from 'react'
// import NumberIncrement from "./lib/index";
import NumberIncrement from "react-increment-number";

import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const [speed, setSpeed] = useState(5)

  const handleAnimationEnd = (endValue: number) => {
    console.log('animation end', endValue);
  };
  const handlIncrement = () => {
    setNumber((number) => number + 128);
  };
  const handlReduction = () => {
    setNumber((number) => number - 128);

  };
  
  const change = (e: any) => {
    setSpeed(e.target.value)
  }
  return (
    <div className="outer">
    <div className="wrapper">
      speed: &nbsp;<input min="1" max="10" value={speed} id="range" onChange={change} type="range" /> &nbsp;<span>{speed}</span>
    </div>
    <div className="wrapper">
      <button onClick={handlReduction} data-testid="reduction">-</button>
      <div className="count" data-testid="number">
        <NumberIncrement to={number} speed={speed} callback={handleAnimationEnd} />
      </div>
      <button onClick={handlIncrement}  data-testid="increment">+</button>
    </div>
  </div>

  )
}

export default App
