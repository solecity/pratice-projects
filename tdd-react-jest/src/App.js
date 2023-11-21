import { useState } from "react";

import "./App.css";

function App() {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [equation, setEquation] = useState("?");
  const [result, setResult] = useState(0);

  const onAdd = () => {
    setEquation("+");
    setResult(+valueA + +valueB);
  };

  const onSubtract = () => {
    setEquation("-");
    setResult(+valueA - +valueB);
  };

  return (
    <div className="wrapper">
      <span>
        <h1 data-testid="valueA">{valueA}</h1>
        <h1 data-testid="equation">{equation}</h1>
        <h1 data-testid="valueB">{valueB}</h1>
        <h1>=</h1>
        <h1 data-testid="result">{result}</h1>
      </span>

      <div className="inputsWrapper">
        <input
          type="number"
          value={valueA}
          onChange={(e) => setValueA(e.target.value)}
          data-testid="a"
        />
        <input
          type="number"
          value={valueB}
          onChange={(e) => setValueB(e.target.value)}
          data-testid="b"
        />
      </div>

      <div className="btnWrapper">
        <button onClick={onAdd}>add</button>
        <button onClick={onSubtract}>subtract</button>
      </div>
    </div>
  );
}

export default App;
