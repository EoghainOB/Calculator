import React from "react";

function CalculatorButton({ value, onClick, className }) {
  let displayValue = value;

  const specialValueMap = {
    "/": "÷",
    "*": "×",
    "-": "−",
    "+": "+",
    "=": "=",
  };

  if (specialValueMap[value]) {
    displayValue = specialValueMap[value];
  }
  return (
    <button className={className} onClick={onClick} value={value}>
      {displayValue}
    </button>
  );
}

export default CalculatorButton;
