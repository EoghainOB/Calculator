import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';

function App() {

  const [sum, setSum] = useState('');

  const handleClick = (e) => {
    setSum(sum + e.target.value)
  }

  const handleClear = () => {
    setSum('')
  }
  
  const handleInvert = () => {
    let result = Function("return " + sum)();
    setSum(result * -1)
  }

  const handlePercent = () => {
    setSum(sum / 100)
  }

  const handleEquals = () => {
    let result = Function("return " + sum)();
    setSum(result)
  }

  return (
    <>
    <Header />
    <div className="App">
      <div className="calc-container">
        <div className='display'>{sum ? sum : '0'} </div>
        <button className="operators" onClick={handleClear}>C</button>
        <button className="operators" onClick={handleInvert}>&#177;</button>
        <button className="operators" onClick={handlePercent}>%</button>
        <button className="operators2" value="/" onClick={handleClick}>/</button>
        <br />
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button className="operators2" value="*" onClick={handleClick}>x</button>
        <br />
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button className="operators2" value="-" onClick={handleClick}>-</button>
        <br />
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button className="operators2" value="+" onClick={handleClick}>+</button>
        <br />
        <button value="0" onClick={handleClick}>0</button>
        <button value="." onClick={handleClick}>.</button>
        <button className="equals" value="=" onClick={handleEquals}>=</button>
        <br />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
