import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult(null);
    }
  };

  const clear = () => {
    setInput('');
    setResult(null);
  };

  return (
    <div className='App'>
      <h1>Calculator</h1>
      <div className='calculator'>
        <div className='display'>
          <input type="text" value={input} readOnly />
          <h2>{result !== null ? result : ''}</h2>
          </div>
          <div className='buttons'>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')} style={{backgroundColor: 'orange'}}>+</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')} style={{backgroundColor: 'orange'}}>-</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')} style={{backgroundColor: 'orange'}}>*</button>
          <div></div>
          <button onClick={() => handleClick('0')}>0</button>
          <div></div>
          <button onClick={() => handleClick('/')} style={{backgroundColor: 'orange'}}>/</button>
          <button onClick={clear} style={{backgroundColor: 'orange'}}>C</button>
          <button onClick={() => handleClick('.')} style={{backgroundColor: 'orange'}}>.</button>
          <button onClick={calculate} style={{backgroundColor: 'orange'}}>=</button>
          </div>
          </div>
    </div>
  );
};

export default App;
