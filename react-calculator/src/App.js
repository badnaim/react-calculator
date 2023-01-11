import "./App.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  // const [firstNumber, secondNumber] = useState("0");

  const ops = ["/", "*", "+", "/", "."];

  const updateCalc = (value) => {
    // if (
    //   (ops.includes(value) && calc === "") ||
    //   (ops.includes(value) && ops.includes(calc.slice(-1)))
    // ) {
    //   return;
    // }
    setCalc(calc + value);
  };

  // const calculate = () => {
  //   let numOf = Number(setCalc);
  //   return numOf;
  // };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">{calc || "0"}</div>
        <div className="btns">
          <div className="sideOne">
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={() => updateCalc("*")}>*</button>
            <button onClick={() => updateCalc("-")}>-</button>
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={deleteLast}>DEL</button>
          </div>
          <div className="bttn1">
            <div className="sideTwo">
              <button onClick={() => updateCalc("1")}>1</button>
              <button onClick={() => updateCalc("2")}>2</button>
              <button onClick={() => updateCalc("3")}>3</button>
            </div>
            <div className="sideThree">
              <button onClick={() => updateCalc("4")}>4</button>
              <button onClick={() => updateCalc("5")}>5</button>
              <button onClick={() => updateCalc("6")}>6</button>
            </div>
            <div className="sideFour">
              <button onClick={() => updateCalc("7")}>7</button>
              <button onClick={() => updateCalc("8")}>8</button>
              <button onClick={() => updateCalc("9")}>9</button>
            </div>
            <div className="sideFive">
              <button onClick={() => updateCalc("0")}>0</button>
              <button onClick={() => updateCalc(".")}>.</button>
              <button>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
