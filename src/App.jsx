import { useState, useEffect } from "react";
import "./App.css";
import Result from "./components/result/Result";
import Increment from "./components/increment/Increment";
import Decrement from "./components/decrement/Decrement";
import Reset from "./components/reset/Reset";
function App() {
  const [num, setNum] = useState("");
  return (
    <>
      <div className="container">
        <div className="counter">
          <div className="container">
            <h2>Counter App</h2>
            <input
              value={num}
              onChange={(e) => setNum(e.target.value)}
              type="number"
              name=""
              placeholder="Enter number..."
              id=""
            />
          </div>
          <div className="counter1">
            <Increment text={num} />
            <Result />
            <Decrement text={num} />
          </div>
          <Reset />
        </div>
      </div>
    </>
  );
}

export default App;
