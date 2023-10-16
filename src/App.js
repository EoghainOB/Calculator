import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import CalculatorButton from "./components/calculatorButton";
import "./App.css";

function App() {
  const [sum, setSum] = useState("");

  const handleClick = (e) => {
    setSum(sum + e.target.value);
  };

  const handleClear = () => {
    setSum("");
  };

  const handleInvert = () => {
    let result = sum;
    setSum(result * -1);
  };

  const handlePercent = () => {
    setSum(sum / 100);
  };

  const handleEquals = () => {
    let result = eval(sum);
    setSum(result.toString());
    // let result = Function("return " + sum)();
    // setSum(result);
  };

  return (
    <>
      <Header />
      <div className="App">
        <div className="calc-container">
          <div className="display">{sum ? sum : "0"} </div>
          <CalculatorButton
            value="C"
            onClick={handleClear}
            className="operators"
          />
          <CalculatorButton
            value="±"
            onClick={handleInvert}
            className="operators"
          />
          <CalculatorButton
            value="%"
            onClick={handlePercent}
            className="operators"
          />
          <CalculatorButton
            value="/"
            onClick={handleClick}
            className="operators2"
          />
          <br />
          <CalculatorButton value="7" onClick={handleClick} />
          <CalculatorButton value="8" onClick={handleClick} />
          <CalculatorButton value="9" onClick={handleClick} />
          <CalculatorButton
            value="*"
            onClick={handleClick}
            className="operators2"
          />
          <br />
          <CalculatorButton value="4" onClick={handleClick} />
          <CalculatorButton value="5" onClick={handleClick} />
          <CalculatorButton value="6" onClick={handleClick} />
          <CalculatorButton
            value="-"
            onClick={handleClick}
            className="operators2"
          />
          <br />
          <CalculatorButton value="1" onClick={handleClick} />
          <CalculatorButton value="2" onClick={handleClick} />
          <CalculatorButton value="3" onClick={handleClick} />
          <CalculatorButton
            value="+"
            onClick={handleClick}
            className="operators2"
          />
          <br />
          <CalculatorButton value="0" onClick={handleClick} />
          <CalculatorButton value="." onClick={handleClick} />
          <CalculatorButton
            value="="
            onClick={handleEquals}
            className="equals"
          />
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
