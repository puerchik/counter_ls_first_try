import React, { useState } from 'react';
import './App.css';
import { SetWrapper } from './components/SetWrapper';
import { CounterWrapper } from './components/CounterWrapper';

export type ContentType = 'set' | 'counter'

function App() {

  let a: number;
  let b: number;

  let [maxValue, setMaxValue] = useState<number>(5)
  let [startValue, setStartValue] = useState<number>(0)

  const setWrapperHandler = (min: number, max: number) => {
    a = min;
    b = max;
  }

  const setButtonHandler = () => {
    setStartValue(a)
    setMaxValue(b)
  }

  return (
    <div className="App wrapper">
      <SetWrapper
        setButton={setButtonHandler}
        setWrapper={(min, max) => setWrapperHandler(min, max)}
        maxValue={maxValue} startValue={startValue} content="set" />
      <CounterWrapper
        minValue={startValue}
        maxValue={maxValue} />
    </div>
  );
}

export default App;