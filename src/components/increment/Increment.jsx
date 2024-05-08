import React from "react";
import "./Increment.css";
import { useSelector, useDispatch } from "react-redux";
import { inc } from "../../context/counterSlice";
function Increment(props) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <button
        onClick={() => dispatch(inc(+props?.text == "" ? 1 : +props.text))}
      >
        increment
      </button>
    </div>
  );
}

export default Increment;
