import React from "react";
import "./Reset.css";
import { useSelector, useDispatch } from "react-redux";
import { res } from "../../context/counterSlice";
function Reset() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <button onClick={() => dispatch(res())}>Reset</button>
    </div>
  );
}

export default Reset;
