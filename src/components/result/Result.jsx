import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./Result.css";
function Result() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="container">
      <h1>{count <= 0 ? 0 : count}</h1>
    </div>
  );
}

export default Result;
